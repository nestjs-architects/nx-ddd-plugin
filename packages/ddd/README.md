# @nestjs-architects/nx-ddd-plugin -- DDD Plugin for Nx

This plugin installs schematics which automate slicing your Nx workspace into domains and layers according to DDD nad
Onion Architecture.

![domains and layers](https://github.com/nestjs-architects/nx-ddd-plugin/blob/main/packages/ddd/assets/graph.png?raw=true)

The generated access restrictions prevent unwanted access between libraries respecting layers and domains:

![access restrictions](https://github.com/nestjs-architects/nx-ddd-plugin/blob/main/packages/ddd/assets/restrictions-error.png?raw=true)

## Features

- 🗺️ Generating domains with domain libraries
- 🙅‍♂️ Adding linting rules for access restrictions between domains
- 🙅‍♀️ Adding linting rules for access restrictions between layers as proposed by Onion Architecture

## Usage

Add this plugin to an Nx workspace:

```
npm i -D @nestjs-architects/nx-ddd-plugin
```

Initialize linting rules

```
nx g @nestjs-architects/nx-ddd-plugin:add
```

Add domains:

```
nx g @nestjs-architects/nx-ddd-plugin:domain adoption
```

If you have a fullstack workspace you can separate those libraries from that for frontend by providing a grouping
directory

```
nx g @nestjs-architects/nx-ddd-plugin:domain adoption --directory server
```

## Generated Structure

The included schematics generate a folder for each domain. This folder contains all necessary libs to provide your
domain use cases logic.

![Folders structure](https://github.com/nestjs-architects/nx-ddd-plugin/blob/main/packages/ddd/assets/folder-structure.png?raw=true)

## How to connect it with the App?

App should import an ui library as it is a way how the application provides the entrypoint to the business logic. This
plugin doesn't generate ui library generator as it doesn't have to be a part of any domain. Ui library can implement a
simple REST API for a specific domain, but also could represent a Backend for Frontend that orchestrate multiple domains
or could produce a classic html views containing data from many domains.

Furthermore, there are many options of the communication protocol you could want to use.

![Application structure](https://github.com/nestjs-architects/nx-ddd-plugin/blob/main/packages/ddd/assets/app-graph.png?raw=true)

## Contact

Maciej Sikorski - [@_MaciejSikorski](https://twitter.com/_MaciejSikorski)
, [LinkedIn](https://www.linkedin.com/in/maciej-sikorski-a01b26149/)

## More

- [Follow us on Twitter](https://twitter.com/NestJSArchitect)

## Acknowledgments

* [Kamil Gajowy](https://github.com/kgajowy)
* [Dominik Ostrowski](https://github.com/Dyostiq)
* [House of Angular](https://houseofangular.io)

## Credits

- [Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/)
- [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.amazon.pl/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=asc_df_0321125215/?tag=plshogostdde-21&linkCode=df0&hvadid=504239934199&hvpos=&hvnetw=g&hvrand=13686115728153990296&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061063&hvtargid=pla-449269547899&psc=1)
