# stream-bars
Animated stream bars for use with OBS (Open Broadcast Software). Data pulled from the XML file, which can be updated with software such as Scoreboard Edit.

# Usage
Load the desired html file into OBS as a Browser source by selecting the local file. Width/height will need to be specified per file.

caster overlay: width 350, height 55
logo overlay: width 770, height 170

Tick the 'Refresh browser when scene becomes active' option to force animation load on scene switch.

# Force Refresh
Currently the files do not automatically refresh, so when you update the names/scores you will have to go into the source properties and click on the 'Refresh cache of current page' button. This is currently the only way to update the names/scores without switching scene, but this will hopefully be fixed in the next version.
