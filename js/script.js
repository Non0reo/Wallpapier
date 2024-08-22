const background = document.getElementById('background')

function livelyPropertyListener(name, val)
{
    switch (name) {
        case "imgSelect":
            console.log(val);
            background.style.backgroundImage = `url(${val})`;
            console.log(Intl.DateTimeFormat(navigator.language, {weekday: "long", month: "long"}).format(new Date()))
            break;
    
        case "mainPanelPositionX":
            document.documentElement.style.setProperty("--mainPanelPositionX", `${val}%`);
            break;
        case "lyricsPanelPositionX":
            document.documentElement.style.setProperty("--lyricsPanelPositionX", `${val}%`);
            break;

        default:
            
            break;
    }
}