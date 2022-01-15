/*
<!-- ======================================================================== -->
    <!-- ## A Java Script to prevent Inspect Element using mouse or keyboard ## -->
<!-- ======================================================================== -->
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
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
{
  return false;
}
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
{
  return false;
}
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
{
  return false;
}
};
