

+++
banner = "/uploads/devops-for-beginners-pt-one.png"
images = [ "/uploads/devops-for-beginners-pt-one.png" ]
categories = [ "Tutorials" ]
date = 2024-04-25T00:00:00.000Z
description = "This guide serves as an entry point into DevOps for anyone interested in operating a Bee node. While it specifically addresses the needs of Bee node operators, the fundamentals covered are broadly applicable, making it a useful resource for aspiring node operators across many distributed p2p networks and blockchains."
references_and_footnotes = [ ]
title = "DevOps for Beginners: Part One"
_template = "post"
slug="devops-for-beginners-pt-one"
+++

## DevOps for Beginners: Part One - Linux

This article is part one of a two part guide which introduces DevOps tools and concepts to beginner node operators. DevOps, short for Development and Operations, is a set of practices and tools for delivering web applications and services securely and efficiently. One of its main focuses is the hosting and management of web applications, including distributed nodes such as the Swarm Bee client. 

Part One of this guide focuses on Linux, while Part Two focuses on all other DevOps tools and concepts which are not explicitly part of Linux itself.

The main purpose of this two part guide is to make Bee and Swarm more accessible to a wider range of people by educating potential node operators who are interested in running a node but are lacking in knowledge of the required tools and concepts.

It also serves as a general guide for anyone interested in operating nodes on decentralized networks, as most of the tools and concepts covered will apply to operating nodes on other networks as well.

Furthermore the guide serves as a reference and companion for the Bee documentation, in particular the [Bee installation instructions](https://docs.ethswarm.org/docs/bee/installation/install). The Bee docs assume a lot of background knowledge, and this guide aims to get you up to speed with most of the devops tools and concepts mentioned in the docs.

{{< admonition info >}}
**ℹ️ INFO:** If you're looking for a beginner-friendly guide to Linux that goes more in-depth than this article, **[Linux Journey](https://linuxjourney.com/)** is an excellent starting point. The site offers **[open-source](https://github.com/cindyq/linuxjourney)** interactive tutorials covering a wide range of Linux topics.
{{< /admonition >}}

{{< admonition tip >}}
**💡 TIP:** This guide is not intended to be read through in a single sitting. Given the density of the information, the best way to use this guide is to go through it one section at a time, and to also explore the resources linked to in each section in order to deepen your understanding.
{{< /admonition >}}

## Target Audience for This Guide

This guide is aimed at tech-savvy individuals who have already had some basic experience working with command lines and, potentially, some basic programming skills as well, but who lack in-depth experience with Linux and other DevOps tools. The guide aims to fill gaps in your knowledge and serve as a stepping-off point for further learning, with  external resources linked to in each section.

## **Linux**

**What is Linux and why do we recommend it for running your node?**

Linux is an open-source operating system, similar to macOS and Windows, but with some key differences. It is part of the Unix family of operating systems, which includes macOS but not Windows. 

Unlike macOS and Windows, Linux is available in many "flavours" or distributions, each with unique features and user interfaces. Known for its stability, security, and performance, Linux is the platform of choice for servers and development environments, owing to its reliability and flexibility.

Within the Swarm community, Linux is the go-to OS for running Bee nodes, and we highly recommend using it as well. For newcomers, we suggest starting with the Ubuntu distribution. Ubuntu belongs to the [Debian](https://www.debian.org/) family of distributions, and it is one of the most widely used Linux distributions and offers excellent community support and a wealth of learning resources.

**Compatibility with macOS:**

For macOS-based users, it's important to note that many concepts covered in this guide are applicable to both macOS and Linux. While there may be slight command variations, the fundamental principles remain consistent. You can follow the guide, making minor adjustments as necessary for your macOS environment.

If you require further assistance or encounter macOS-specific challenges, the Swarm [node-operators Discord channel](https://discord.com/channels/799027393297514537/811553590170353685) is available to provide support and guidance.

### Installation

Running a Bee node on Ubuntu can be approached in several ways, depending on your needs.

Below we review several approaches for running Bee nodes, detailing the pros and cons of each, and explaining which users which they are best suited for:

#### Ubuntu on a VPS (Virtual Private Server)

{{< admonition info >}}
**ℹ️ INFO:** This is our recommended method for beginner node operators looking to operate full Bee nodes to participate in staking. We cover getting started with a VPS in more detail in a dedicated section in part two of this article series.
{{< /admonition >}}

- **Ideal for:** Users seeking a remote, scalable, and manageable solution. 
- **Setup:** Rent a VPS and run Ubuntu on it. This approach is beneficial as it offloads hardware management and ensures consistent uptime.
- **Instructions:** 
  - [Set up Ubuntu on a Digital Ocean Droplet](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-ubuntu-20-04-server-on-a-digitalocean-droplet)
  - [Set up Ubuntu on a Contabo VPS](https://webshanks.com/contabo-vps-setup/) (More cost-effective option)
- **Pros:** No physical hardware management required, easy to scale, reliable uptime.
- **Cons:** Ongoing costs, requires familiarity with remote server management.

#### Ubuntu Desktop on a Dedicated Machine

- **Ideal for:** Those who have a spare computer and a steady internet connection.
- **Setup:** Perform a full installation of Ubuntu Desktop. This process is relatively straightforward if you have a spare computer and a USB drive.
- **Instructions:** [Ubuntu Desktop Install Instructions](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)
- **Pros:** Full control over the environment, dedicated resources.
- **Cons:** Requires a dedicated physical machine.

#### Ubuntu on WSL (Windows Subsystem for Linux)

- **Ideal for:** Windows users who want to run Ubuntu alongside Windows without dual-booting. 
- **Setup:** Install Ubuntu within Windows using WSL, which allows access to the Ubuntu terminal directly from Windows. This setup does not provide the Ubuntu Desktop GUI, but it is sufficient for Bee node operation.
- **Instructions:** [Set up Ubuntu in WSL on Windows](https://learn.microsoft.com/en-us/windows/wsl/install)
- **Pros:** Convenient for Windows users, no need for additional hardware.
- **Cons:** Potentially lower performance than a dedicated Ubuntu system, may face compatibility issues due to using WSL instead of a dedicated Ubuntu setup.

#### Ubuntu on a portable USB Drive

- **Ideal for:** Users who have spare computers with various hardware configurations, potentially running outdated operating systems, and wish to utilize them with a familiar UI.
- **Setup:** Install Portable Ubuntu on a USB drive using [Rufus](https://rufus.ie/).
- **Instructions:** [Create a bootable USB stick on macOS](https://ubuntu.com/tutorials/create-a-usb-stick-on-macos)
- **Pros:** Portability - use your Ubuntu environment on any computer with a USB port.
- **Cons:** Limited performance compared to a full installation, dependency on the USB drive speed.


### Terminal Navigation

The terminal, also referred to as shell or command prompt (though these terms are technically distinct, they are commonly used interchangeably), provides you with a [CLI](https://en.wikipedia.org/wiki/Command-line_interface) that gives you direct and powerful access to your computer. The [bash shell](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) is the default shell on Ubuntu, but the commands covered in this guide work in many different shells.

Terminal navigation involves using command-line instructions to move through the filesystem. 

#### Key Concepts:

  1. **Filesystem Structure:** Unix-like systems have a hierarchical directory structure, starting with the root directory (`/`). From there, directories branch out, containing subdirectories and files.
  2. **Current Working Directory:** When you open a terminal, you are in a directory, known as the current working directory. You can perform operations relative to this directory.
  3. **Pathnames:** There are two types of pathnames:
    - **Absolute Pathnames:** Start from the root directory (e.g., `/usr/local/bin`)
    - **Relative Pathnames:** Relative to the current directory (e.g., `./Documents`)
  4. **Shell Scripting (Advanced):** Advanced shell users may learn how to write shell scripts which can be used to automate common tasks. While shell scripting is not covered in this guide, you can read more about it [here](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/). One important caution: shell scripting can be very powerful, so ***you should never run a shell script you don't understand from a source you don't trust 100%***. If you do need to run a shell script, make sure to get it from an official source (such as the [shell script for installing Bee](https://github.com/ethersphere/bee/blob/master/install.sh) from Swarm's official GitHub organization.)

#### Bash commands cheat sheet:

- `pwd`: Print Working Directory. Shows your current directory.
- `ls`: List. Shows files and directories in the current directory.
   - `ls -l`: Detailed list, showing permissions, owner, size, and modification date. 
   - `ls -a`: Shows all files, including hidden ones (those starting with a dot).
- `cd`: Change Directory. Moves to another directory.
   - `cd ~`: Move to the home directory.
   - `cd ..`: Move up one directory.
   - `cd /`: Move to the root directory.
   - `cd -`: Move to the last directory you were in.
- `mkdir`: Make Directory. Creates a new directory.
- `rmdir`: Remove Directory. Deletes an empty directory.
- `touch`: Creates a new empty file or updates the timestamp of an existing file.
- `cp`: Copy. Copies files or directories.
   - `cp file1 file2`: Copies file1 to file2.
   - `cp -r dir1 dir2`: Recursively copy, for directories.
- `mv`: Move. Moves files or directories, or renames them.
- `rm`: Remove. Deletes files or directories.
   - `rm -r`: Recursively delete, for directories.
- `find`: Searches for files and directories.
- `locate`: Quickly find files (uses a database updated by `updatedb`).


{{< admonition tip >}}
**💡 TIP:** Note that the options (also sometimes called flags) that appear after the main commands can often be combined. For example, the `-l` and `-a` flags used with the `ls` command can be combined as `-la` to print details about all files, including hidden ones:
```
 ls -la
```
{{< /admonition >}}



{{< admonition danger >}}
**🔥 DANGER:** The `-r` flag seen in the above commands stands for "recursive", and it allows a command to be recursively executed through all levels of a directory structure. This is essential when operating commands on directories (folders) that contain multiple levels of nested folders.

For example, when copying a folder with the `cp` command, you will need to use `cp -r target_folder destination_folder` to ensure all nested folders within the target folder are copied.

This can, however, be dangerous to use with some commands, such as `rm`. It can be very destructive if used incorrectly, as it could inadvertently delete your entire filesystem with a single command.
{{< /admonition >}}


You can try [this interactive command line tutorial](https://linuxjourney.com/lesson/the-shell) for a quick and easy way to get up to speed with command line navigation.

#### Piping

Piping in Bash allows you to send the output of one command as input to another, using the `|` symbol. This technique is useful for chaining commands together to perform complex tasks.

##### Piping with `jq`:

Using `jq` with Piping: `jq` is a command-line JSON processor. You might use it with piping to filter or transform JSON output from one command before processing it further. If used without any options, `jq` will simply format JSON to make it easier to read. This feature makes it a convenient tool to use in concert with the Bee API.

For example, the output from the `topology` endpoint is particularly difficult to read without `jq`:


```bash
 curl http://localhost:1635/topology
 ```
 
 Without newlines or indentations, the output is difficult to parse visually:
 


{{< admonition INFO >}}
**ℹ️ INFO:** In each of the examples below, we have truncated the output as the complete output is too large to display here.
{{< /admonition >}}
 
 ```json
{"baseAddr":"da7e5cc3ed9a46b6e7491d3bf738535d98112641380cbed2e9ddfe4cf4fc01c4","population":20559,"connected":175,"timestamp":"2024-02-07T17:13:51.960599746Z","nnLowWatermark":3,"depth":10,"reachability":"Public","networkAvailability":"Available","bins":{"bin_0":{"population":11247,"connected":20,"disconnectedPeers":[{"address":"77696ffe87fa2592355b1ba5b2d93b5f18b118427cb48c8e21c7f4f5088f8d49","metrics":{"lastSeenTimestamp":1707316706,"sessionConnectionRetry":5,"connectionTotalDuration":2418,"sessionConnectionDuration":1106,"sessionConnectionDirection":"outbound","latencyEWMA":19,"reachability":"Public","healthy":true}},{"address":"501267152efe6276947d2646be29cd7e0b1a488cb3eb12ca8a319aaf18fb7358","metrics":{"lastSeenTimestamp":1707323255,"sessionConnectionRetry":8,"connectionTotalDuration":55895,"sessionConnectionDuration":311,"sessionConnectionDirection":"outbound","latencyEWMA":518,"reachability":"Public","healthy":false}},{"address":"719731d3fec45195b76d3245840b1cf36ffa3080acceb3d232eb14ea4b80f6fa","metrics":{"lastSeenTimestamp":1707315006,"sessionConnectionRetry":1,"connectionTotalDuration":20326,"sessionConnectionDuration":68,"sessionConnectionDirection":"outbound","latencyEWMA":0,"reachability":"Public","healthy":false}},{"address":"67d546d6d0c9039268d5ddb234cedf59424d8d4f2c65a5b0a1f2f4dc39a1a7d9","metrics":{"lastSeenTimestamp":1707320453,"sessionConnectionRetry":2,"connectionTotalDuration":2025,"sessionConnectionDuration":397,"sessionConnectionDirection":"outbound","latencyEWMA":50,"reachability":"Public","healthy":false}},{"address":"7833dcfe9d0e6accfba2a06e3e21cac57a510d5da644799dab3020d17e5ecdf8","metrics":{"lastSeenTimestamp":1707318987,"sessionConnectionRetry":23,"connectionTotalDuration":35258,"sessionConnectionDuration":126,"sessionConnectionDirection":"outbound","latencyEWMA":21,"reachability":"Public","healthy":true}}...
```

But if we pipe the results of the `/topology` endpoint into `jq`, it becomes much more readable:

```bash
 curl http://localhost:1635/topology | jq
```

Then the results become far more readable:

```json
{
  "baseAddr": "da7e5cc3ed9a46b6e7491d3bf738535d98112641380cbed2e9ddfe4cf4fc01c4",
  "population": 20571,
  "connected": 174,
  "timestamp": "2024-02-07T17:20:34.984885908Z",
  "nnLowWatermark": 3,
  "depth": 10,
  "reachability": "Public",
  "networkAvailability": "Available",
  "bins": {
    "bin_0": {
      "population": 11250,
      "connected": 20,
      "disconnectedPeers": [
        {
          "address": "77696ffe87fa2592355b1ba5b2d93b5f18b118427cb48c8e21c7f4f5088f8d49",
          "metrics": {
            "lastSeenTimestamp": 1707316706,
            "sessionConnectionRetry": 5,
            "connectionTotalDuration": 2418,
            "sessionConnectionDuration": 1106,
            "sessionConnectionDirection": "outbound",
            "latencyEWMA": 19,
            "reachability": "Public",
            "healthy": true
          }
        },
        {
          "address": "501267152efe6276947d2646be29cd7e0b1a488cb3eb12ca8a319aaf18fb7358",
          "metrics": {
            "lastSeenTimestamp": 1707323255,
            "sessionConnectionRetry": 8,
            "connectionTotalDuration": 55895,
            "sessionConnectionDuration": 311,
            "sessionConnectionDirection": "outbound",
            "latencyEWMA": 518,
            "reachability": "Public",
            "healthy": false
          }
        }...
```

`jq` is powerful for parsing, filtering, and manipulating JSON data directly in the command line, making it invaluable for working with JSON-formatted API responses or configuration files. It is an excellent tool to have in your DevOps toolkit.

##### Using piping to save output:

Piping isn't just for passing data between commands—it also allows you to capture output and save it directly to a file. This functionality can be especially useful when dealing with API responses that you might need to analyse, share, or use as input for another process.

We can easily write formatted results to a file using the `>` operator along with `jq`:

```bash
curl http://localhost:1635/topology | jq '.' > output.json
```

And we can confirm the contents of the file to confirm it has been saved using `cat`:

```bash
cat output.json
```
And here we see the last few lines of the file:
```bash
    ...
    "bin_28": {
      "population": 0,
      "connected": 0,
      "disconnectedPeers": null,
      "connectedPeers": null
    },
    "bin_29": {
      "population": 0,
      "connected": 0,
      "disconnectedPeers": null,
      "connectedPeers": null
    },
    "bin_30": {
      "population": 0,
      "connected": 0,
      "disconnectedPeers": null,
      "connectedPeers": null
    },
    "bin_31": {
      "population": 0,
      "connected": 0,
      "disconnectedPeers": null,
      "connectedPeers": null
    }
  },
  "lightNodes": {
    "population": 0,
    "connected": 0,
    "disconnectedPeers": null,
    "connectedPeers": null
  }
}
```
##### Using nohup to save output & send to the background
`nohup` is a command used in Linux to execute a process that persists even after the user logs out or the terminal session ends. The term `nohup` stands for "no hang up," originating from the early days of Unix when users would physically disconnect from the system via a modem connection, which could terminate running processes.

When you run a command or a script with `nohup`, it ensures that the process continues running in the background, detached from the current shell session. This is particularly useful for long-running tasks, where you do not want the process to terminate if the terminal session is closed or the connection is lost.



The basic syntax for using `nohup` is:

```bash
nohup command [arguments] &
```

Replace "command" with the name of the command or script you wish to run and include any necessary arguments. The trailing ampersand (&) tells the shell to run the command in the background. At this point, you receive the process ID, which you can stop with the kill command, for example:

```bash
nohup command journalctl --lines=100 --follow --unit bee &
[1] 12345
~ kill 12345
```
You can read the logs from the created "nohup.out" file.
By default, `nohup` redirects both standard output (stdout) and standard error (stderr) to the said file. You can override this behavior by explicitly redirecting output using standard shell redirection operators (> for stdout, 2> for stderr).

Since `nohup` runs processes in the background, you regain control of the terminal immediately after executing the command. You can continue working in the terminal or log out without affecting the running process.

### Logging and Service Management with `systemd`, `systemctl`, and `journalctl`

For Bee node operators running their nodes on a Linux system, understanding how to manage your Bee service and check its logs is crucial. Linux's `systemd`, `systemctl`, and `journalctl` provide powerful tools for this purpose. This section will introduce these tools and explain how to use them to manage your Bee node effectively.

### `systemd`: An Introduction

`systemd` is a system and service manager for Linux operating systems that offers more than just a way to start and stop services. It manages the entire system startup and supports features such as system logging, service dependency, and automatic service restarts, among others.

**Managing Bee Node with `systemctl`:**

`systemctl` is the command-line interface for interacting with `systemd`. Here's how you can use it to manage your Bee node service:

#### Starting the Bee Service
To start your Bee node as a service, use the command:
```bash
sudo systemctl start bee
```

#### Enabling Bee Service on Boot
To ensure your Bee node starts automatically on system boot, enable it with:
```bash
sudo systemctl enable bee
```

#### Checking Service Status
To check the status of your Bee node service, including whether it's active and running, use:
```bash
sudo systemctl status bee
```

{{< admonition info >}}
**ℹ️ INFO:** Use "q" to exit from the status review screen.
{{< /admonition >}}

#### Stopping the Service
If you need to stop your Bee node for any reason, you can do so with:
```bash
sudo systemctl stop bee
```

#### Restarting the Service
To restart your Bee node service, which would be a good idea to do after making configuration changes, use:
```bash
sudo systemctl restart bee
```

### Viewing Logs with `journalctl`

`journalctl` is a utility for querying and displaying logs from `journald`, `systemd`'s logging service. It allows you to view detailed logs for troubleshooting and monitoring your Bee node's activities.

**Viewing Bee Node Logs:**

To view the logs for your Bee node, run:

```bash
sudo journalctl -u bee
```

This command displays the logs generated by your Bee node service.

**Filtering Logs by Time:**

You can filter logs within a certain time frame, such as "since today", by adding the `--since` option:
```bash
sudo journalctl -u bee --since today
```




{{< admonition info >}}
**ℹ️ INFO:** See the [**"FILTERING OPTIONS" from the official journalctl docs**](https://man7.org/linux/man-pages/man1/journalctl.1.html) for more details about using the `--since` option.
{{< /admonition >}}

**Following Logs in Real Time:**

To follow the logs as new entries are added, similar to `tail -f`, use the `-f` flag:
```bash
sudo journalctl -u bee -f
```

### Practical Tips

- **Customizing Log Output**: `journalctl` offers various options to customize the output, such as `-o verbose` for more detailed logs or `-o json` for JSON-formatted logs.
- **Maintaining System Security**: Always use `sudo` with care, especially when operating in production environments. Limit access to your Bee node's logs and configuration to authorized users only.
- **Automating Monitoring**: Consider setting up monitoring scripts that use `journalctl` to alert you of critical errors or unusual activities in your Bee node logs.

By mastering `systemd`, `systemctl`, and `journalctl`, you'll have robust tools at your disposal for managing and troubleshooting your Bee node. Regularly checking your Bee node's logs can help you stay ahead of issues and ensure your node operates smoothly within the Swarm network.


### Vim

[Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)), or "[Vi](https://en.wikipedia.org/wiki/Vi_(text_editor)) Improved," is a powerful text editor available on Unix systems like Ubuntu. It's known for its efficiency and flexibility, though it has a bit of a learning curve. Unlike GUI-based text editors that you may be familiar with, Vim is accessible directly from the command line. It is an indispensable tool for editing text files in environments without access to GUI text editors, such as when connecting to a remote VPS through SSH. We will primarily use it for editing config files (such as Bee's `bee.yaml`) from the command line. 

Vim can be launched with the `vim` command:

```bash
sudo vim config.yaml
```

As navigation in Vim is done entirely from the keyboard (without a mouse), it takes a bit of time to get used to coming from a GUI-based text editor. You can quickly get up to speed with Vim by reviewing [this interactive tutorial](https://www.openvim.com/). Additionally, you can use [this handy Vim cheat sheet](https://vimsheet.com/), or [this one](https://vim.rtorr.com/), as references to help you remember all the Vim commands. 

#### Installation

Vim is typically pre-installed on Ubuntu. However, if you need to install or update it, you can do so by running:

```bash
sudo apt update
sudo apt install vim
```

To open Vim, simply type `vim` in your terminal. If you want to open or create a file with Vim, use:
```bash
vim filename
```


{{< admonition info >}}
**ℹ️ INFO:** As an alternative to Vim you can use vi by simple replacing the `vim` command with `vi`. This may be a convenient option on systems which come with vi already installed but without Vim.
{{< /admonition >}}


#### Vim in Context of Running a Bee Node

We will use Vim whenever we need to modify our `config.yaml` configuration file. The following command will open up the file in your terminal window:

```bash
sudo vim /etc/bee/bee.yaml
```
Vim has two main modes: `command` and `insert`. Vim starts in command mode by default. To edit the config file, simply press the `i` key. This action switches you to insert mode, allowing you to navigate through the file using the arrow keys or the letters `h`, `j`, `k`, `l`. After making the desired edits, you can exit insert mode and return to command mode by pressing the  `Escape` key on your keyboard. From there, you can save your changes and exit Vim with the `:wq` command, or exit without saving using the `:qa` command. And that's about as much of Vim as you need to know for working with Bee! There's a lot more you could learn about Vim, but it's not required for working with Bee.


### Package Management

Managing software on Ubuntu is handled by `apt-get`, a software management command-line tool. It handles the installation, updating, and removal of software packages. While there are other package mangers commonly used with different Linux distributions—such as `yum`, `rpm`, and others—in this guide, we will stick to `apt-get` as we are focusing on Ubuntu. 

Note that packages for Ubuntu use the `.deb` filename extension, short for [Debian](https://www.debian.org/) (the family of Linux distributions of which Ubuntu is a member).

#### Using `apt-get` for Bee Node Management

- **Installing Packages:** `sudo apt-get install [package_name]` installs new packages. For example, `sudo apt-get install bee` would install the Bee node software on your system.
- **Updating Packages:** To update your software, use `sudo apt-get update` to refresh your package list and `sudo apt-get upgrade` to install the updates.
- **Removing Packages:**
   - The `sudo apt-get remove [package_name]` command removes a package but keeps configuration files and certain data intact. This is useful if you plan to reinstall the package later and want to retain your settings.
   - The `sudo apt-get purge [package_name]` command, on the other hand, removes everything related to the package, including configuration files and data. 

#### Important Note on Using `purge`

Using `purge` with Bee can lead to the loss of key files and settings. It's crucial to understand that if you use `sudo apt-get purge bee`, it will permanently delete your Bee node's configuration files and keys. These keys are essential for accessing your node and its data. If you haven't backed them up, this data will be irrecoverable. Always ensure you have a backup of your keys and configurations before using the `purge` command.


#### Package Versions and Sources

When following [the instructions for installing Bee](https://docs.ethswarm.org/docs/bee/installation/install#1-install-bee) using `apt-get` as outlined in the official Bee documentation, you may encounter some commands thata seem unfamiliar. To fully understand the installation instructions, it's important to grasp several key concepts: Linux repositories, GPG keys, and their use in package management with `apt-get` in Ubuntu. Here's a breakdown of these concepts:

### Linux Repositories

- A repository in Linux is a storage location from which your system retrieves and installs software packages. Each repository contains a collection of software packages, along with information about these packages, such as their version and dependencies.
- When you install a package using `apt-get`, Ubuntu searches the repositories listed in its sources. By default, Ubuntu is configured with its own repositories, but you can add third-party repositories to access additional software. Because the `bee` package is not part of any default repositories, you'll need to include the official repository maintained by the Swarm team when installing it.

#### Adding a Repository:
- The command `echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ethersphere-apt-keyring.gpg] https://repo.ethswarm.org/apt * *" | sudo tee /etc/apt/sources.list.d/ethersphere.list > /dev/null` adds the official Swarm repository to your list of sources.
- Here, `deb` indicates a Debian package repository, and `$(dpkg --print-architecture)` automatically inserts your system's architecture (like amd64, i386, etc.).
- The `signed-by` portion points to the GPG key that will be used to verify the authenticity of the packages in this repository.
- The URL `https://repo.ethswarm.org/apt` is the location of the repository.
- The command writes this line to a file named `ethersphere.list` under `/etc/apt/sources.list.d/`, which is the directory where Ubuntu looks for additional sources.

#### GPG Keys and Their Importance
- GPG (GNU Privacy Guard) keys are used to sign and verify software packages. This ensures that the packages you download and install are exactly as provided by the source and have not been tampered with.
- By importing the GPG key (`curl -fsSL https://repo.ethswarm.org/apt/gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/ethersphere-apt-keyring.gpg`), you are adding the public key of the repository maintainer (Swarm) to your system. This is used to verify that the packages you download from the repository are indeed from the Swarm organization.
- The `curl` command fetches the GPG key from the given URL, `gpg --dearmor` processes the key, and the output is saved in `/usr/share/keyrings/`, a standard location for such keys.

#### Updating Package Lists and Installing Software
- `sudo apt-get update` refreshes the list of available packages and their versions but does not install or upgrade any packages. It's essential to run this after adding a new repository to ensure that `apt-get` is aware of the new packages available.
- `sudo apt-get install bee` then installs the Bee package from the newly added repository.


{{< admonition danger >}}
**🔥 DANGER:** Always use packages and repositories from trusted sources to minimize security risks. 
{{< /admonition >}}

### File Ownership and `chmod`

The `chmod` command in Unix/Linux is used to change the access permissions of files and directories. Here's a simplified guide on how to use it.

#### Understanding Permissions

- **User Types:**
  - **User (u):** The owner of the file.
  - **Group (g):** Users in the file's group.
  - **Others (o):** Everyone else.
- **Permission Types:**
  - **Read (r):** Allows reading the file.
  - **Write (w):** Allows modifying the file.
  - **Execute (x):** Allows executing the file or entering the directory.

#### Viewing Permissions
- Use `ls -l` to view permissions.
- Example: `-rw-r--r-- 1 user group 0 Jan  1 00:00 example.txt`
  - The permissions here are `-rw-r--r--`.

#### Changing Permissions 
- Format: `chmod [who][+/-][permissions] filename`
  - `who`: u (user), g (group), o (others), a (all)
  - `+`: add a permission, `-`: remove a permission
- Example: `chmod g+w example.txt` adds write permission for the group.

#### Common Usage Examples:
1. **Give execute permission to the owner:**
   - `chmod u+x example.txt`
2. **Remove execute permission from group and others:**
   - `chmod go-x example.txt`

Check out [this article from freeCodeCamp](https://opensource.com/article/19/8/linux-chmod-command) for a more in-depth guide to `chmod`.

### Sudo 

The `sudo` command in Unix-type systems stands for "superuser do" or "substitute user do." It allows authorized users to execute commands as the superuser (often referred to as "root") or as other authorized users.`sudo` provides a secure way to perform administrative tasks, as it requires users to authenticate themselves before executing privileged commands.

{{< admonition danger >}}
**🔥 DANGER:** Never use `sudo` to run a command or shell script that you don't fully understand, especially if it comes from an untrusted source.
{{< /admonition >}}

#### Basic Syntax

The basic syntax for using `sudo` is: `sudo command-to-execute`.

For example, to edit a system configuration file with elevated privileges, you can use: `sudo vi /etc/config-file.conf`.

#### Using `sudo` with Commands

To execute a command with `sudo`, simply prepend `sudo` to the command you want to run with elevated privileges.

Example: `sudo apt update` will update the package list with root privileges.

#### Authentication

When you use `sudo`, you will be prompted to enter your own user password to verify your identity and authorization. 

After successful authentication, `sudo` grants temporary superuser privileges for the specific command.

#### Timeouts and Caching

`sudo` typically caches your authentication for a certain amount of time (usually 5 minutes by default). During this time, you can execute multiple `sudo` commands without re-entering your password. After the timeout expires, you will need to re-authenticate.

#### Running a Shell as Root

You can run an interactive shell as the root user using: `sudo -i` or `sudo su -`.

Be cautious when using a root shell, as it provides unrestricted access to system files and commands.

#### Configuration File

The `sudo` configuration is managed in the `/etc/sudoers` file.

It is recommended to edit this file using the `visudo` command, which provides syntax checking and helps avoid potentially locking yourself out due to a misconfiguration.

#### Granting sudo Access

To grant a user sudo access, add an entry in the `/etc/sudoers` file. You can specify which commands or groups of commands the user can run with `sudo`.

Example: `username ALL=(ALL:ALL) ALL` grants full `sudo` access to the user named "username."

#### Best Practices

- Use `sudo` sparingly and only when necessary to minimize the risk of accidental system changes.
- Avoid running graphical applications with `sudo` unless required, as it can cause permission issues.
- Always double-check the commands you intend to run with `sudo` to avoid unintended consequences.

#### Logging and Auditing

`sudo` logs user actions in the system log, allowing system administrators to monitor and review command execution for security and auditing purposes.

#### In Context of Operating a Bee Node

When operating a Bee node, there are times you will need to access the contents of your node's data folder, such as when taking a backup of your node or exporting your private keys. However, by default, the data folder is only accessible by the `bee` service. To access the contents of the folder, you may change the permissions (see the previous section on file ownership and the `chmod` command). Another more convenient method is simply to use the `sudo` command:

For example, to explore your Bee node's data folder at `/var/lib/bee` in order to export your private key, you would use these commands:

Inspect data folder:

```bash
sudo ls  /var/lib/bee/
```

```bash
[sudo] password for noah:
kademlia-metrics  keys  localstore  password  stamperstore  statestore
```
Inspect keys folder:
```bash
 sudo ls /var/lib/bee/keys
```

```bash
libp2p.key  libp2p_v2.key  pss.key  swarm.key
```

Print out `swarm.key` contents in order to save and backup:

```bash
sudo cat /var/lib/bee/keys/swarm.key | jq
```

```bash
{
  "address": "d72696bd245f39ec4297b1d209484ad96e044554",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "2d94ccd0e9f52fca3c68b085076efaf58238d4ceec14b5d9b90f4edbdb98fffd",
    "cipherparams": {
      "iv": "dd325eb98ea08acbf57337d8d2bd375a"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "n": 32768,
      "r": 8,
      "p": 1,
      "dklen": 32,
      "salt": "4c8eccaf370d1c2047a8023723ae38c1ce075e996715b679a0b13c93e217e779"
    },
    "mac": "c31017cacaedacecc4be69e5f390d731911b1a26e1fa4a080e0f84a127464515"
  },
  "version": 3,
  "id": "d92c2b71-41cf-4870-baac-ade128f9cbdb"
}
```

{{< admonition danger >}}
**🔥 DANGER:** Make sure never to share your private key with anyone or allow it to be exposed publicly as it allows full access to your node's blockchain account!
{{< /admonition >}}

## Stay Tuned for Part 2

In Part 1, we covered a broad range of Linux tools and concepts relevant to node operators. The topics covered will assist you in your journey as a Bee node operator or as a node operator for other distributed networks. In Part, 2 we will explore a wide range of additional topics, including Docker, logging, JSON RPCs, and more. 

If at any point you need additional help, feel free to pop into the [Swarm node-operators Discord channel](https://discord.com/channels/799027393297514537/811553590170353685).