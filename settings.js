/* Author: Daniel Teichman <danielteichman@gmail.com>
 * License: GNU GPL v3 <http://www.gnu.org/licenses/gpl-3.0.html>
 * Module: Settings for Node.js VBox interface */

//change vboxmanagepath if your vboxmanage binary is not in your PATH
//WINDOWS 7: C:\\Program Files\\Oracle\\VirtualBox\\;
var vboxmanagepath = "";

//change vboxmanageexe to the name of your virtualboxmanage executable
//Linux: vboxmanage (I think)
var vboxmanageexe = "VBoxManage.exe";

//change port if you would like to run the RPC server on a different
//port.  fairly self-explanatory
var port = 8910;

var favicon = "yinyang.ico";

var defaultResponse = "vboxcontrolinfo.txt";