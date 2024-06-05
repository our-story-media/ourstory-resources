---
title: Indaba Kit
next: /quickstart/app/
---

<ReadTime />

# Indaba Kit

<Leader>

Indaba is available as a stand-alone, portable 'kit', a self-contained instance of Indaba that allows you to support the whole Indaba workflow in the field without internet connectivity.

You require both a fully installed 'Kit', and some Android devices with the Indaba application installed **before** commencing a field deployment.

</Leader>

## Required Hardware

Indaba Kit is designed to work on a very specific piece of equipment - this is so that we can make sure that it will always work as expected, and allow us to update it for everyone with any updates at the same time.

You will need the following before continuing with your Indaba Kit installation:

| Equipment                                       | Approx. Price | Reference Link                                                                                                                                                                                                          |
| ----------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RaspberryPi 4 (4 or 8 GB)                       | 50GBP         | [https://www.raspberrypi.com/products/raspberry-pi-4-model-b/?variant=raspberry-pi-4-model-b-4gb](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/?variant=raspberry-pi-4-model-b-4gb)                      |
| USB C Cable (for RaspberryPi power)             | 5GBP          | [https://www.amazon.co.uk/ZKAPOR-Charger-Charging-Braided-Samsung/dp/B0B95Z3RX8](https://www.amazon.co.uk/ZKAPOR-Charger-Charging-Braided-Samsung/dp/B0B95Z3RX8)                                                        |
| Battery WiFi Router                             | 60GBP         | [https://www.tp-link.com/uk/home-networking/wifi-router/tl-wr802n/](https://www.tp-link.com/uk/home-networking/wifi-router/tl-wr802n/)                                                                                  |
| High capacity USB battery (min 20000mAh)        | 40GBP         | [https://www.amazon.co.uk/INIU-20000mAh-Charging-Portable-Charger/dp/B0CB1DF4JQ?ref\_=ast_sto_dp&th=1&psc=1](https://www.amazon.co.uk/INIU-20000mAh-Charging-Portable-Charger/dp/B0CB1DF4JQ?ref_=ast_sto_dp&th=1&psc=1) |
| SD Card (full size, min Class 10, min 32GB)     | 10GBP         | [https://www.amazon.co.uk/SanDisk-Ultra-Memory-Class-UHS-I/dp/B08GYG6T12/](https://www.amazon.co.uk/SanDisk-Ultra-Memory-Class-UHS-I/dp/B08GYG6T12/)                                                                    |
| Case for Rasperry Pi (any case with active fan) | 20GBP         | [https://argon40.com/en-gb/products/argon-one-v2-case-for-raspberry-pi-4](https://argon40.com/en-gb/products/argon-one-v2-case-for-raspberry-pi-4)                                                                      |
| (optional) Safe carry case                      | 60GBP         | [https://www.casesuk.com/explorer-cases/3005.BE.html](https://www.casesuk.com/explorer-cases/3005.BE.html)                                                                                                              |
| **Approx. total for a complete kit**            | **245GBP**    |                                                                                                                                                                                                                         |

## Connecting Hardware

1. Install the RaspberryPi into the case, following the instructions provided.
2. Connect the WiFi router to the RaspberryPi using a short Ethernet cable (usually provided).
3. Connect a USB power lead from the WiFi router (usually provided with router) to the RaspberryPi (any port).
4. **Follow the Initial Software Installation** guide below.

5. Connect the power lead for the RasperryPi to the power bank.

6. Setup the WiFi Router:
   - Connect to the router WiFi using its default settings
   - Login to the router admin panel using the default login (usually printed on the device)
   - Set the following settings on the router (differs by brand):
     - WiFi name: INDABA
     - WiFi password: ourstoryrocks
     - DHCP IP Range: 10.10.10.1 - 10.10.10.255
     - Static IP for the RaspberryPi to 10.10.10.1
     - Address of router to 10.10.10.254

The kit is now ready for use.

## Initial Software Installation

1. Download the following file onto a USB stick and use [Balena Etcher](https://etcher.balena.io/) to put onto SD card (min 32GB):

> Tip: `Right Click` and then `Save Link As` to download the following files:

<TitanVersion version="indaba-rpi.version" file="indaba-rpi.zip" />

<!-- - [images.tar](http://download.indaba.dev/images.tar) -->

2. Make sure the Indaba Kit has enough battery power or is plugged into the mains.

3. Insert the freshly created SD into the RaspberryPi in the Indaba Kit.

> Tip: The first time you turn it on with a freshly created SD card it can take up to 15 minutes to install.

**DO NOT POWER OFF UNTIL INSTALLATION IS COMPLETE**

4. To check on progress of the installation, join the `INDABA` WiFi network with any device and visit [http://indaba.local](http://indaba.local) or [http://10.10.10.1](http://10.10.10.1).

5. Once you see the Indaba Dashboard appearing in your browser, you are ready to proceed.

## Software Updates

You can update the Dashboard software when updates are available.

1. Download the following file:

> Tip: `Right Click` and then `Save Link As` to download the following files:

<TitanVersion version="indaba-update.version" file="indaba-update.tar" />

2. Copy this file into the root folder of a USB stick making sure it is called `indaba-update.tar` (you do not need to use `Balena Etcher` as with a first-time install).

# Deployment

## Powering On

Press the power button once and release.

## Powering Off

Hold the power button for 3 seconds and release. Wait until the light on the WiFi transmitter has gone out before closing the case.

<!-- ## Initial Device Connection

If the application is running on the computer, and all devices connected to the WiFi you can open the application on each Android Device.

On the first run, the application will search for a local application running on a computer, this may take up to 30 seconds.

This initial step needs to take place with your participants in range of the WiFi:

1. Get each group to select the shoot you want them to participate in.
2. Allow them to login, select a camera and open the camera screen.

{% hint style="info" %}
As soon as a device has joined the camera screen and has downloaded the necessary assets, participants are able to contribute content without connection to the WiFi.
{% endhint %}

## Capturing Content

This process can be accomplished offline, i.e. the computer and WiFi connection does not have to be available.

## Uploading Content

_**Requires WiFi connection to computer**_

Uploading should be initiated when each device is connected to the WiFi and the application is running on the computer. In some cases, uploading a single device at a time may be faster than attempting to sync all simultaneously.

Depending on the participants, this upload process could be built into 'pitstops' during the filming process.

## Reviewing Content

_**Requires WiFi connection to computer**_

Once content is uploaded from a device it is available to all participants to view and use in making stories.

## Editing Content

_**Requires WiFi connection to computer**_

Multiple stories can be edited simultaneously, however processing of each is performed in a queue.

"**Publishing**" a story involves the application creating a single video file from the participants story.

Only one story is processed \(published\) at a time, so there may be a delay for participants waiting for their story to complete processing.

{% hint style="info" %}
Indaba consumes lots of battery, particularly when performing story publishing. Keep an eye on your laptop battery and control power consumption where necessary.

Stories will continue to process without the Android device being available.
{% endhint %}

## Presenting Content

Low resolution published content can be played directly from the Android devices that created the content, however you can open the upload directory located on the computer and play high quality versions directly. -->

# Maintenance

## Backup Data

SD cards sometimes get corrupted, so it is good practice to maintain regular updates of the Indaba data on your Indaba Kit.

To perform a backup:

1. Insert a USB stick into the `Indaba Kit`.
2. Refresh the `Administrator Dashboard` and select `Backup to this Drive`.
3. Wait until the back has completed.

A new backup will be created on the USB drive each time the button is pressed. This backup will be in the `/indaba/...timestamp...` folder on the drive.

Make sure to remove this USB drive and store apart from the Indaba Kit to avoid data loss.

## Restore Data

If you need to restore a previous backup for some reason, follow these steps:

1. Locate the USB Drive with a previously made backup.
2. Make sure you have a working Indaba Kit (i.e. you can get to the Dashboard via a browser connected to the `INDABA` WiFi network). If your Indaba Kit cannot start, you will need to follow the steps in `Initial Installation` and restore your Kit to it's default state.
3. Plug in the USB Drive with your backups and visit the Dashboard in a browser.
4. Select the back you want to restore from the list on the Dashboard. Click the `Restore` button next to the backup.

> Note: Since the Indaba Kit is not connected to the internet, the dates/times listed may not make sense, but will be in order of when the backups were made.

> Note: All data will be wiped when conducting a Restore. Be careful which backup you select.

## Emergency Backup

Use this as a last resort, for when you cannot start Indaba into a state where you can run Backup from the dashboard. It will allow you at a minimum to rescue the video files, however depending on the cause of the failure, may not allow you to restore the whole Kit to a previous state.

1. Create an empty file called `EMERGENCYBACKUP` on a USB drive using a normal computer.
2. Insert the USB drive into the `Indaba Kit`.
3. Wait a minimum of 10 minutes, then remove the USB drive.
4. Insert the USB drive into another computer and check for the backup files.

## Backup Structure

_For normal behaviour, it is not required to understand the structure of the backup folder._

```bash
USBDRIVE/
├─ indaba/
│  ├─ indaba-logs/ # Location of logs that are generated every time the USB stick is inserted into the device.
│  │  ├─ logs-%timestamp%/ # Contents of a single logs backup (multiple .log files)
│  ├─ indaba-em-backup/
│  │  ├─ backup-%timestamp%/ # Contents of a single emergency backup process.
│  │
│  ├─ %timestamp%/
│  │  ├─ upload/ # Contents of the Indaba media directory
│  │  ├─ *.json # Each JSON file is a backup for a database collection
│  │  ├─ indaba.redis # Backup of Redis session service
│
│  indaba-update.tar # File downloaded from internet containing update to Indaba
│  indaba-update.tar.done # Update file renamed when the update is successful
│
│  EMERGENYBACKUP # File used to trigger emergency backup process
│  EMERGENYBACKUP.done # File placed on drive to indicate an emergency backup has completed
```
