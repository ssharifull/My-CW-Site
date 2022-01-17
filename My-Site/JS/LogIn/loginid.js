/*
<!-- Java Script for the login form. -->
*/

ID="clientEventHandlersJS"
LANGUAGE="javascript"

//Script for Action on clicking the login button.
    function gobut_onclick()
{
    if(document.frmHome.txtuserid.value == "" && document.frmHome.txtlogpass.value == "")
	{
    	alert("Login Id or Password can not be blank.")
	}
    	else if(document.frmHome.txtuserid.value == "ITJan22" && document.frmHome.txtlogpass.value == "CheckWork@2022")
	{
    	window.location = "../../../My-Site/PAGE/Works2022/JanWorksList.html"
	}
    	else
	{
    	alert("Please enter valid id and password")
	}
}
    function txtuserid_onblur()
{
	if (validtext(document.frmHome.txtuserid.value))
	{
	    	alert("Please do not enter these ( % ' <  > ) special characters")
	    	document.frmHome.txtuserid.focus()
	    	return false
	}
}
    function txtlogpass_onblur()
{
	    if (validtext(document.frmHome.txtlogpass.value))
	{
		    alert("Please do not enter these ( % ' <  > ) special characters")
		    document.frmHome.txtlogpass.focus()
		    return false
	}
}

//Script for Action on pressing the Enter key.
    function Enter()
{
	    if (event.keyCode == 13)
	{
		    if(document.frmHome.txtuserid.value == "" && document.frmHome.txtlogpass.value == "")
		{
		    alert("Login Id or Password can not be blank.")
		}
		    else if(document.frmHome.txtuserid.value == "ITJan22" && document.frmHome.txtlogpass.value == "CheckWork@2022")
        {
       window.location = "../../../My-Site/PAGE/Works2022/JanWorksList.html"
	    }
		    else
	    {
	        alert("Please enter valid id and password")
		}
	}
}
    function frmHome_onmousedown()
{
	    if (document.all)
	{
		    if (event.button==2||event.button==3)
		{
		        alert("Ibn Seena English High School, Sharjah")
		        return false;
		}
	}
}
