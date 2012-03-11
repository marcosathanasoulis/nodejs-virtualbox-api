Author: Daniel Teichman <danielteichman@gmail.com>
License: GPL v3 <http://www.gnu.org/licenses/gpl-3.0.html>

nodejs-virtualbox-api provides a web services API for VirtualBox.  It does so by converting web requests into VBoxManage commands and returning the output.


Recommended: cache VBoxManage in memory with all other relevant VirtualBox files to avoid disk-trashing.

Usage: http://localhost:8910/list/--long/vms
Result: output of: vboxmanage list --long vms