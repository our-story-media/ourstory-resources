---
title: Troubleshooting
---

# Troubleshooting

## Titan Dashboard

### Installation Hangs / Not doing anything

When using the `Toolbox` version of Our Story Titan (which is backed by Docker Toolbox), there are sometimes issues where Docker fails to start. Often the easiest method of getting it going again is to:

- Reboot the machine
- Changing the network whilst docker is 'hung' often triggers it to continue.
- Trying to start Our Story Titan for the first time whilst connect to the internet (in theory it does not need to download anything but this sometimes makes it work).

### Network Wont Reconnect After Closing Dashboard

Run the `Fix Network` tool installed alongside Our Story Dashboard.

## Android Application

If you try the following steps and still have trouble connecting to the Our Story Dashboard, try disabling the Windows Firewall. This often can fix these issues, but is not recommended as a first step.

### Errors

**Error 1: No network connection**
This error signifies that the device does not have a WiFi (or 3G) connection.

**Error 2: Cannot connect to application**

**Error 3: Invalid API Key**

**Error 4: We are having trouble retrieving your information. Login again to continue**

**Error 5: Please try logging in again**

**Error 6: Request cancelled by participant**

**Error 7: Server error**

**Error 8: Unknown Network Error**

### Connection Screen

The connection screen has a list of 4 checks that the app makes when starting up. These checks can help you diagnose potential issues with your Our Story setup.

- **WiFi Connected**: This checks if you have an active WiFi connection which the phone is connected to. If this is not ticked, check the device is connected to your local Our Story network.
- **IP Address Range Correct**: This checks if the network it is connected to is setup for Our Story, where it gets allocated an IP address in the range 10.10.10.x. If this is not ticked, check which WiFi is connected and check that this WiFi is the Our Story one.
- **Remote Application Found**: This checks that the Titan Dashboard computer can be found on the WiFi network. If this is not ticked, check your computer is on, connected to the Our Story WiFi and has configured it's IP address correctly.
- **Connection Established**: This checks that communication with the Dashboard is possible. If not ticked, check that the Dashboard application is running on your computer and restart if necessary.
