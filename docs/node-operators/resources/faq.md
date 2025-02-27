---
description: List of frequently asked questions.
---

import multisig from './assets/multisig.png';

# Node operator FAQ

Here's a list of frequently asked questions.

### 1. How do I know if my validator node is working? {#1}

After starting the validator node, run the following command:

```
docker-compose logs node | head -n 20
```

Verify that the account address in the response matches your registered consensus address.

```
node       | Using account acf8bf98d1632e602d0b1761771049af21dd6597
```

Also, check the node's availability on
[Ronin Network Status](https://stats.roninchain.com/).

### 2. How do I know if my bridge operator node is working? {#2}

After starting the bridge, run the following command:

```
docker-compose logs bridge | head -n 20
```

Verify that the operator account address in the response matches your registered
bridge operator address. If you're a Governing Validator, also check that the
voter account address matches the registered bridge voter address.

```
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Operator account         address=0x2e82D2b56f858f79DeeF11B160bFC4631873da2B
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Voter account            address=0x2295EdAA6BD5c07fB3227628c62Af12248106667
```

Also, check the node's availability on
[Ronin Network Status](https://stats.roninchain.com/).

### 3. How do I generate the required private keys? {#3}

See [Generate keys](./../setup/generate-keys.md).

### 4. Should chain governor address be different from admin address? {#4}

We recommend using different governor and admin addresses to reduce the impact of leaks or losses to either account.

### 5. How to use a multisig wallet as a validator? {#5}

Using a multi-signature wallet can provide an additional layer of security when running your validator node.

The Validator Dashboard is supported in [Ronin Safe](https://multisig.roninchain.com)—
you can find it under the **Apps** tab.
After creating a safe, use your safe's address as an admin or governor address.
Each action with this safe's address requires multiple confirmations depending
on your safe's settings.

<img src={multisig} width={1280} />

### 6. Any recommendation for monitoring node's health? {#6}

Consider the following:

* Integrate with the [Ronin Network Status](https://stats.roninchain.com/) page
  for the overall status of the chain's node.
* For each node, the system publishes metrics on port `6060` for Prometheus
  collection. Integrate a Prometheus-Grafana stack for more granular monitoring
  of your node's health.

### 7. What ports (if any) have to be open to the outside world? {#7}

Keep public ports only for peering and discovery, otherwise keep it internal. Our `docker-compose` configuration already binds RPC port `8545` to `localhost`.

To implement additional security measures for your node, see
[Security hardening](./../resources/security.md).

### 8. If there is a node or bridge upgrade, how do I get this information? {#8}

Latest version of Ronin and its changelog are always available on
[GitHub](https://github.com/axieinfinity/ronin/releases). A good way to keep
track of upgrades is to join our [Discord](https://discord.gg/roninnetwork).

To upgrade your node, see [Latest versions](./../setup/latest.md).

### 9. How much time do I have to upgrade my nodes? {#9}

Upgrades are usually backwards-compatible. It can contain performance
improvements, bug fixes or new features. It's recommended that every node is
upgraded as soon as possible.

An upgrade, however, can also be a hardfork, which is usually not
backwards-compatible. If your node fails to upgrade before a hardfork block
occurs, the data on your node can differ from that on the network. Therefore,
it's critical to upgrade your node before a hardfork occurs. All Ronin-planned
hardforks are announced seven days in advance on our
[Discord](https://discord.gg/roninnetwork) and
[Ronin Newsletter](https://roninblockchain.substack.com/).
