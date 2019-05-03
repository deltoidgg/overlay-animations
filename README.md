# Overlay animations
Animated stream overlays built with HTML/CSS/JS, providing compatibility with OBS (Open Broadcast Software) and XSplit, created for usage by East London Fighters. The overlay titles pull their data from the XML file in /assets, which can be updated with StreamControl. 

# Usage
Drag the intended files into your scene display, or load the desired html file into OBS as a Browser source by selecting the local file. Width/height will need to be specified per file.

caster overlay: `width 350, height 55`

logo overlay: `width 770, height 170`

player overlay: `width 500, height 45`

player-combined overlay: `width 500, height 45`

score overlay: `width 175, height 75`

round overlay: `width 210, height 45`

Tick the 'Refresh browser when scene becomes active' option to force animation load on scene switch.

# Adding players & teams
To add players you'll need to edit them into the players.csv file with their team information. Functionality is coming soon to be able to easily add support for team logos. Note that the team column needs to have a value or you'll get a bug on the name bar. If the player has no team, then just enter `-` like you should see for other players.

# Adding Teams
The current solution for displaying team logos is temporary, future version will allow for an easier way to add teams, but for now you must edit the `assets/read.js`.

Open up the file in your favourite code editor. I use VS Code, but you can use notepad if you don't have one installed. 

Go to line 57, where you'll see a switch statement. This works by reading the text provided by the `players.csv` document, so it's important you keep that accurate. Once the switch statement recognises a name, it'll respond by changing the value of `logo` to the team logo.

In order to add a team, add a new case with the name of your new team, then in the next line reference the image location. Make sure your team logos have been added to the `assets/teams` folder. As an example, let's say you wanted to add the team Github and wanted the image `github.png` to display, the code you would add should look like this:

```
case 'Github':
    logo = "../assets/teams/github.png"
break;
```

# SteamControl

In the scoreboard folder you can find StreamControl.exe which can be used to update the StreamControl.XML which is the file that the overlays read. To set up StreamControl all you need to do is go into Configuration, and for the layout option select layout.XML which should be in the same folder. Make sure that the output format is XML, and you're good to go.

You'll see four tabs, but you only need to pay attention to the first two in most cases. The fourth one just gets info from the Excel file to provide additional information for the overlay, but these aren't fields you should be editing. Using StreamControl is pretty straight forward, just start typing the player's name and you should see their information in the drop down autocomplete.

Don't forget to save when you want to update the overlays, unlike some other software there is unfortunately no auto-save feature.

# Force Refresh
Currently the files do not automatically refresh, so when you update the names/scores you will have to go into the source properties and click on the 'Refresh cache of current page' button. This is currently the only way to update the names/scores without switching scene, but this will be fixed in a later version.

