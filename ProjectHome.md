**nodejs-virtualbox-api** provides a web services API for VirtualBox.  It does so by converting web requests into VBoxManage commands and returning the output.

Example: http://localhost:8910/list/--long/vms
is equivalent to: vboxmanage list --long vms