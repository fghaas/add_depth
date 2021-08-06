#!/bin/bash

cat vision.md \
    <(echo) \
    projection.md \
    <(echo) \
    freeviewing.md \
    <(echo) \
    photography.md \
    <(echo) \
    gimp.md \
    <(echo) \
    videography.md > full-talk.md

pandoc -t ms -V pointsize=16pt -V lineheight=20pt -o full-talk.pdf full-talk.md
