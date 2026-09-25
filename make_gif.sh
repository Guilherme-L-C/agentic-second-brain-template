#!/bin/bash
/opt/homebrew/bin/ffmpeg -nostdin -y -i docs/demo_graph.mp4 -r 10 -vf "scale=800:-1,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" docs/demo_graph.gif
