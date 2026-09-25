function run(argv) {
    var app = Application('Calendar');
    app.includeStandardAdditions = true;

    if (argv.length === 0) {
        return "Comandos: list_calendars, list <dias>, add <calendario> <titulo> <data_inicio_ISO> <data_fim_ISO>";
    }

    var command = argv[0];

    if (command === "list_calendars") {
        var names = [];
        app.calendars().forEach(c => names.push(c.name()));
        return JSON.stringify(names);
    }

    if (command === "list") {
        var days = argv.length > 1 ? parseInt(argv[1]) : 7;
        var now = new Date();
        var nowMs = now.getTime();
        var endMs = nowMs + (days * 24 * 60 * 60 * 1000);
        
        var eventsList = [];

        app.calendars().forEach(function(cal) {
            try {
                // To avoid JXA whose bugs with dates, we filter manually on recent events, 
                // but since that's slow, we just get events from the last 30 days to future.
                // It's safer to just fetch and filter.
                var evts = cal.events(); 
                // Limit to last N events to not freeze if calendar is huge.
                // Actually, a safer JXA way for date filtering:
                var filtered = cal.events.whose({ startDate: { _greaterThan: now } })();
                filtered.forEach(function(e) {
                    var sDate = e.startDate();
                    if (sDate.getTime() <= endMs) {
                        eventsList.push({
                            calendar: cal.name(),
                            summary: e.summary(),
                            startDate: sDate.toISOString(),
                            endDate: e.endDate() ? e.endDate().toISOString() : sDate.toISOString()
                        });
                    }
                });
            } catch(e) {
                // skip unreadable calendars
            }
        });
        
        // Sort by start date
        eventsList.sort((a,b) => new Date(a.startDate) - new Date(b.startDate));
        return JSON.stringify(eventsList, null, 2);
    }

    if (command === "add") {
        if (argv.length < 5) return "Erro: Faltam argumentos. Uso: add <cal> <titulo> <inicio> <fim>";
        var calName = argv[1];
        var summary = argv[2];
        var start = new Date(argv[3]);
        var end = new Date(argv[4]);

        var targetCal = null;
        app.calendars().forEach(function(c) {
            if (c.name() === calName) targetCal = c;
        });

        if (!targetCal) return "Erro: Calendario não encontrado.";

        var newEvent = app.Event({
            summary: summary,
            startDate: start,
            endDate: end
        });

        targetCal.events.push(newEvent);
        return "Evento '" + summary + "' adicionado com sucesso no calendário '" + calName + "'.";
    }

    return "Comando desconhecido.";
}
