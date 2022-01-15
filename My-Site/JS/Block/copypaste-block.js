/*
<!-- Java Script to prevent Copy-Paste -->
*/

ID="clientEventHandlersJS"
LANGUAGE="javascript"

document.addEventListener('contextmenu', event=> event.preventDefault());
    document.onkeydown = function(e)
{
    if(event.keyCode == 123)
{
    return false;
}
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0))
{
    return false;
}
    if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0))
{
    return false;
}
    if(e.ctrlKey && e.keyCode == 'X'.charCodeAt(0))
{
    return false;
}
    if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0))
{
    return false;
}
}
