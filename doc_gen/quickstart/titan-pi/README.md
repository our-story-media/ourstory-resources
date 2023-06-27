---
title: Dashboard Kit
next: /quickstart/app/
---

<ReadTime />

# Indaba Titan (Kit)

<Leader>

Indaba Titan is available as a stand-alone, portable 'kit'.

</Leader>

## Software Updates

Download the following file onto a USB stick:

> Tip: `Right Click` and then `Save Link As` to download the following files:

<!-- - [images.tar](http://download.indaba.dev/images.tar) -->

<TitanVersion version="indaba-update.version" file="indaba-update.tar" />

---

## Installation / Titan Updates

Download the following file onto a USB stick and use Balena Etcher to put onto SD card:

> Tip: `Right Click` and then `Save Link As` to download the following files:

<!-- - [images.tar](http://download.indaba.dev/images.tar) -->

<TitanVersion version="indaba-rpi.version" file="indaba-rpi.zip" />

---

## Powering On

Hold the power button for 3 seconds and release.

## Backup Data

SD cards sometimes get corrupted, so it is good practice to maintain regular updates of the Indaba data on your Indaba Titan device.

To perform a backup:

1. Insert a USB stick into the `Titan device`.
2. Refresh the `Administrator Dashboard` and select `Backup to this Drive`.
3. Wait until the back has completed.

A new backup will be created on the USB drive each time the button is pressed. This backup will be in the `/indaba/...timestamp...` folder on the drive.

## Emergency Backup

Use this as a last resort, for if you cannot start Indaba Titan into a state where you can run Backup from the dashboard. It will allow you at a minimum to rescue the video files, however depending on the cause of the failure, may not allow you to restore the whole system to a previous state.

1. Create an empty file called `EMERGENCYBACKUP` on a USB drive using a normal computer.
2. Insert the USB drive into the `Titan Device`.
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
│  indaba-update.tar # File downloaded from internet containing update to Indaba Titan
│  indaba-update.tar.done # Update file renamed when the update is successful
│
│  EMERGENYBACKUP # File used to trigger emergency backup process
│  EMERGENYBACKUP.done # File placed on drive to indicate an emergency backup has completed
```
