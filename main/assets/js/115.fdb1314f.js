(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{677:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade-your-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-your-node"}},[e._v("#")]),e._v(" Upgrade Your Node")]),e._v(" "),a("p",[e._v("This document describes the upgrade procedure of a "),a("code",[e._v("gaiad")]),e._v(" full-node to a new version.")]),e._v(" "),a("h2",{attrs:{id:"cosmovisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmovisor"}},[e._v("#")]),e._v(" Cosmovisor")]),e._v(" "),a("p",[e._v("The Cosmos SDK provides a convenient process manager that wraps around the "),a("code",[e._v("gaiad")]),e._v(" binary and can automatically swap in new binaries upon a successful governance upgrade proposal. Cosmovisor is entirely optional but recommended. More information can be found in "),a("a",{attrs:{href:"https://docs.cosmos.network/master/run-node/cosmovisor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos.network docs"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/cosmovisor/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos-sdk/cosmovisor/readme"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("To get started with Cosmovisor first download it")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gZ2V0IGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29zbW92aXNvci9jbWQvY29zbW92aXNvcgo="}}),e._v(" "),a("p",[e._v("Set up the environment variables")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyAmcXVvdDsjIFNldHVwIENvc21vdmlzb3ImcXVvdDsgJmd0OyZndDsgfi8ucHJvZmlsZQplY2hvICZxdW90O2V4cG9ydCBEQUVNT05fTkFNRT1nYWlhZCZxdW90OyAmZ3Q7Jmd0OyB+Ly5wcm9maWxlCmVjaG8gJnF1b3Q7ZXhwb3J0IERBRU1PTl9IT01FPSRIT01FLy5nYWlhJnF1b3Q7ICZndDsmZ3Q7IH4vLnByb2ZpbGUKc291cmNlIH4vLnByb2ZpbGUK"}}),e._v(" "),a("p",[e._v("Create the appropriate directories")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgfi8uZ2FpYS9jb3Ntb3Zpc29yL3VwZ3JhZGVzCm1rZGlyIC1wIH4vLmdhaWEvY29zbW92aXNvci9nZW5lc2lzL2Jpbi8KY3AgJCh3aGljaCBnYWlhZCkgfi8uZ2FpYS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluLwoKIyB2ZXJpZnkgdGhlIHNldHVwLiAKIyBJdCBzaG91bGQgcmV0dXJuIHRoZSBzYW1lIHZlcnNpb24gYXMgZ2FpYWQKY29zbW92aXNvciB2ZXJzaW9uCg=="}}),e._v(" "),a("p",[e._v("Now "),a("code",[e._v("gaiad")]),e._v(" can start by running")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW92aXNvciBzdGFydAo="}}),e._v(" "),a("h3",{attrs:{id:"preparing-an-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-an-upgrade"}},[e._v("#")]),e._v(" Preparing an Upgrade")]),e._v(" "),a("p",[e._v("Cosmovisor will continually poll  the "),a("code",[e._v("$DAEMON_HOME/data/upgrade-info.json")]),e._v(" for new upgrade instructions. When an upgrade is ready, node operators can download the new binary and place it under "),a("code",[e._v("$DAEMON_HOME/cosmovisor/upgrades/<name>/bin")]),e._v(" where "),a("code",[e._v("<name>")]),e._v(" is the URI-encoded name of the upgrade as specified in the upgrade module plan.")]),e._v(" "),a("p",[e._v("It is possible to have Cosmovisor automatically download the new binary. To do this set the following environment variable.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXhwb3J0IERBRU1PTl9BTExPV19ET1dOTE9BRF9CSU5BUklFUz10cnVlCg=="}}),e._v(" "),a("h2",{attrs:{id:"manual-software-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-software-upgrade"}},[e._v("#")]),e._v(" Manual Software Upgrade")]),e._v(" "),a("p",[e._v("First, stop your instance of "),a("code",[e._v("gaiad")]),e._v(". Next, upgrade the software:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgZ2FpYQpnaXQgZmV0Y2ggLS1hbGwgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgJmx0O25ld192ZXJzaW9uJmd0OwptYWtlIGluc3RhbGwK"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("em",[e._v("NOTE")]),e._v(": If you have issues at this step, please check that you have the latest stable version of GO installed.")])]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repo"),a("OutboundLink")],1),e._v(" for details on which version is needed for which public testnet, and the "),a("a",{attrs:{href:"https://github.com/cosmos/Gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia release page"),a("OutboundLink")],1),e._v(" for details on each release.")]),e._v(" "),a("p",[e._v("Your full node has been cleanly upgraded! If there are no breaking changes then you can simply restart the node by running:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),e._v(" "),a("h2",{attrs:{id:"upgrade-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-genesis-file"}},[e._v("#")]),e._v(" Upgrade Genesis File")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("If the new version you are upgrading to has breaking changes, you will have to restart your chain. If it is not breaking, you can skip to "),a("a",{attrs:{href:"#restart"}},[e._v("Restart")])])]),e._v(" "),a("p",[e._v("To upgrade the genesis file, you can either fetch it from a trusted source or export it locally.")]),e._v(" "),a("h3",{attrs:{id:"fetching-from-a-trusted-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetching-from-a-trusted-source"}},[e._v("#")]),e._v(" Fetching from a Trusted Source")]),e._v(" "),a("p",[e._v("If you are joining the mainnet, fetch the genesis from the "),a("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("mainnet repo"),a("OutboundLink")],1),e._v(". If you are joining a public testnet, fetch the genesis from the appropriate testnet in the "),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repo"),a("OutboundLink")],1),e._v(". Otherwise, fetch it from your trusted source.")]),e._v(" "),a("p",[e._v("Save the new genesis as "),a("code",[e._v("new_genesis.json")]),e._v(". Then replace the old "),a("code",[e._v("genesis.json")]),e._v(" with "),a("code",[e._v("new_genesis.json")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgJEhPTUUvLmdhaWEvY29uZmlnCmNwIC1mIGdlbmVzaXMuanNvbiBuZXdfZ2VuZXNpcy5qc29uCm12IG5ld19nZW5lc2lzLmpzb24gZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[e._v("Then, go to the "),a("a",{attrs:{href:"#reset-data"}},[e._v("reset data")]),e._v(" section.")]),e._v(" "),a("h3",{attrs:{id:"exporting-state-to-a-new-genesis-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-state-to-a-new-genesis-locally"}},[e._v("#")]),e._v(" Exporting State to a New Genesis Locally")]),e._v(" "),a("p",[e._v("If you were running a node in the previous version of the network and want to build your new genesis locally from a state of this previous network, use the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgJEhPTUUvLmdhaWEvY29uZmlnCmdhaWFkIGV4cG9ydCAtLWZvci16ZXJvLWhlaWdodCAtLWhlaWdodD0mbHQ7ZXhwb3J0LWhlaWdodCZndDsgJmd0OyBuZXdfZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[e._v("The command above take a state at a certain height "),a("code",[e._v("<export-height>")]),e._v(" and turns it into a new genesis file that can be used to start a new network.")]),e._v(" "),a("p",[e._v("Then, replace the old "),a("code",[e._v("genesis.json")]),e._v(" with "),a("code",[e._v("new_genesis.json")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3AgLWYgZ2VuZXNpcy5qc29uIG5ld19nZW5lc2lzLmpzb24KbXYgbmV3X2dlbmVzaXMuanNvbiBnZW5lc2lzLmpzb24K"}}),e._v(" "),a("p",[e._v("At this point, you might want to run a script to update the exported genesis into a genesis that is compatible with your new version. For example, the attributes of a the "),a("code",[e._v("Account")]),e._v(" type changed, a script should query encoded account from the account store, unmarshall them, update their type, re-marshal and re-store them. You can find an example of such script "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/02c6c9fafd58da88550ab4d7d494724a477c8a68/contrib/migrate/v0.33.x-to-v0.34.0.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"reset-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-data"}},[e._v("#")]),e._v(" Reset Data")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("If the version <new_version> you are upgrading to is not breaking from the previous one, you should not reset the data. If it is not breaking, you can skip to "),a("a",{attrs:{href:"#restart"}},[e._v("Restart")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("If you are running a "),a("strong",[e._v("validator node")]),e._v(" on the mainnet, always be careful when doing "),a("code",[e._v("gaiad unsafe-reset-all")]),e._v(". You should never use this command if you are not switching "),a("code",[e._v("chain-id")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),a("p",[e._v("Make sure that every node has a unique "),a("code",[e._v("priv_validator.json")]),e._v(". Do not copy the "),a("code",[e._v("priv_validator.json")]),e._v(" from an old node to multiple new nodes. Running two nodes with the same "),a("code",[e._v("priv_validator.json")]),e._v(" will cause you to get slashed due to double sign !")])]),e._v(" "),a("p",[e._v("First, remove the outdated files and reset the data. "),a("strong",[e._v("If you are running a validator node, make sure you understand what you are doing before resetting")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdW5zYWZlLXJlc2V0LWFsbAo="}}),e._v(" "),a("p",[e._v("Your node is now in a pristine state while keeping the original "),a("code",[e._v("priv_validator.json")]),e._v(" and "),a("code",[e._v("config.toml")]),e._v(". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);