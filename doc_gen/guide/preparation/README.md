---
title: "Step 1: Preparation"
---
<ReadTime />

<Steps step="1"/>

# Preparation

## Context


## Contacts


## Equipment

::: warning Before Entering The Field
You need to setup and install the Our Story application following the following steps!
:::

### 1. Install / Setup

Follow the [Quick Start](/quickstart) Guide.

::: tip
This requires a large download, so it is advisable to perform this step on a wired or fast WiFi connection before entering the field.

It is possible to install without this download by requesting a USB stick pre-loaded with the downloadable content.
:::

<!-- :::: tabs
::: tab Windows
1. Download the Installer from Here.
2. Run the installer, following all instructions. \(you will need a decent internet connection to perform this step, as the download is ~4GB\).
3. Once the installer has completed, your computer might need restarting.
4. Run the Our Story application.
5. Visit [https://localhost](http://localhost) in your browser to check the application has started.
::: -->

<!-- ::: tab OSX
1. Install Docker from [Here](https://download.docker.com/mac/stable/Docker.dmg).
2. Make sure Docker is running.
3. In a terminal run `git clone --depth=1 https://github.com/digitalinteraction/ourstory-guide.git && cd ourstory-guide/titan/install && ./startup.sh`
4. Visit [https://localhost](http://localhost) in your browser to check the application has started.
:::
:::: -->

<!-- ### 2. Setup WiFi

The Our Story application is required to be on a computer with an IP address of `10.10.10.1`

{% hint style="info" %}
The Windows application will attempt to setup this for you, but in some cases this might not be possible.
{% endhint %}

This usually involves 2 steps:

1. Change the DHCP address range of the router to be within 10.10.10.2 - 10.10.10.255 - usually done through the router admin panel.
2. Manually set the IP address of the computer running Our Story to be 10.10.10.1.

{% hint style="info" %}
It is advisable to use a pre-shared password on the WiFi, which has already been entered on the Android devices, as anyone on the network can potentially access videos from the application. -->
<!-- {% endhint %} -->



### 2. Setup Shoot

Currently, the standalone version of Our Story matches the online Bootlegger platform version, so there are a couple of simple steps to make it operate correctly as standalone.

1. Create a new shoot for your deployment, making sure to fill in the date range and name.
2. The default settings should be OK for most deployments, but please check before entering the field.

This is the minimum required to operate with the Standalone Android application.

### 3. Install Software onto Devices

There are two options to install the App on your devices:

* Find it in the `install/android` folder of the application, transfer to each device and open the file to install.
* Install from the Play Story from [Here](https://play.google.com/store/apps/details?id=uk.ac.ncl.di.bootlegger.offline).

::: tip
If using the copy file method, you will be prompted to enable Unknown Sources when installing this application, this is normal for applications not from the Google Play Store and is OK to accept in this instance.
:::