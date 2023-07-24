export type Monster = {
  name: string
  level: number
  heroes: string[] | string
  weapons: string[]
  items: string[]
  spells: string[]
  pack: number
}

export type MonsterGroups = {
  [key: number]: Monster[]
}

export const monsterGroups: MonsterGroups = {
  1: [
    {
      name: 'Goblin Grunts',
      level: 1,
      heroes: [],
      weapons: ['Two-Handed Sword'],
      items: [],
      spells: [],
      pack: 1
    },
    {
      name: 'Kobold Skirmishers',
      level: 1,
      heroes: [],
      weapons: [],
      items: [],
      spells: [],
      pack: 1
    },
    {
      name: 'Bog Zombies',
      level: 1,
      heroes: ['Terakian'],
      weapons: ['Holy Mace', 'Battle Axe'],
      items: ['Holy Symbol'],
      spells: ['Vampiric Touch'],
      pack: 3
    },
    {
      name: 'Ensnaring Vines',
      level: 1,
      heroes: [],
      weapons: [],
      items: [],
      spells: [],
      pack: 3
    },
    {
      name: 'Air Servitors',
      level: 1,
      heroes: 'magic',
      weapons: [],
      items: [],
      spells: ['Enchant Weapons'],
      pack: 4
    },
    {
      name: 'Water Servitors',
      level: 1,
      heroes: [],
      weapons: [],
      items: [],
      spells: [],
      pack: 4
    },
    {
      name: 'Gnoll Raiders',
      level: 1,
      heroes: 'magic',
      weapons: ['Two-Handed Sword'],
      items: [],
      spells: ['Enchant Weapons', 'Frost Bolt'],
      pack: 5
    },
    {
      name: 'Doomknights',
      level: 1,
      heroes: [],
      weapons: ['Holy Mace'],
      items: ['Holy Symbol', 'Daramere’s Cloak', 'Damilu Huskie'],
      spells: ['Death Pact'],
      pack: 5
    }
  ],
  2: [
    {
      name: 'Hobgoblin Brutes',
      level: 2,
      heroes: [],
      weapons: ['Two-Handed Sword'],
      items: ['Daramere’s Cloak', 'Damilu Huskie'],
      spells: ['Death Pact'],
      pack: 1
    },
    {
      name: 'Spider Terrors',
      level: 2,
      heroes: ['Terakian'],
      weapons: ['Battle Axe'],
      items: [],
      spells: ['Vampiric Touch'],
      pack: 1
    },
    {
      name: 'Chaos Lizards',
      level: 2,
      heroes: ['Arcanian'],
      weapons: ['Boomerang'],
      items: ['Daramere’s Cloak', 'Damilu Huskie'],
      spells: [],
      pack: 3
    },
    {
      name: 'Moor Skeletons',
      level: 2,
      heroes: 'magic',
      weapons: ['Holy Mace', 'Battle Axe'],
      items: ['Holy Symbol'],
      spells: ['Enchant Weapons', 'Vampiric Touch'],
      pack: 3
    },
    {
      name: 'Fire Servitors',
      level: 2,
      heroes: [],
      weapons: ['Two-Handed Sword'],
      items: [],
      spells: ['Frost Bolt'],
      pack: 4
    },
    {
      name: 'Earth Servitors',
      level: 2,
      heroes: 'magic',
      weapons: ['Two-Handed Sword'],
      items: [],
      spells: ['Enchant Weapons'],
      pack: 4
    },
    {
      name: 'Minions of Chaos',
      level: 2,
      heroes: ['Arcanian'],
      weapons: ['Holy Mace', 'Two-Handed Sword'],
      items: ['Holy Symbol', 'Daramere’s Cloak', 'Damilu Huskie'],
      spells: ['Frost Bolt'],
      pack: 5
    },
    {
      name: 'Torments',
      level: 2,
      heroes: 'physical',
      weapons: [],
      items: [],
      spells: [],
      pack: 5
    }
  ],
  3: [
    {
      name: 'Goblin King’s Guard',
      level: 3,
      heroes: [],
      weapons: ['Two-Handed Sword'],
      items: [],
      spells: [],
      pack: 1
    },
    {
      name: 'Ancient Adventurers',
      level: 3,
      heroes: [],
      weapons: ['Holy Mace', 'Two-Handed Sword'],
      items: ['Holy Symbol'],
      spells: [],
      pack: 1
    },
    {
      name: 'Swamp Spirits',
      level: 3,
      heroes: ['Terakian'],
      weapons: ['Holy Mace', 'Two-Handed Sword'],
      items: ['Holy Symbol', 'Daramere’s Cloak', 'Damilu Huskie'],
      spells: ['Death Pact'],
      pack: 3
    },
    {
      name: 'Marsh Trolls',
      level: 3,
      heroes: [],
      weapons: ['Two-Handed Sword'],
      items: [],
      spells: [],
      pack: 3
    },
    {
      name: 'Abyssal Founders',
      level: 3,
      heroes: ['Arcanian'],
      weapons: ['Holy Mace', 'Two-Handed Sword'],
      items: ['Holy Symbol', 'Daramere’s Cloak', 'Damilu Huskie'],
      spells: ['Frost Bolt'],
      pack: 4
    },
    {
      name: 'Divine Founders',
      level: 3,
      heroes: [],
      weapons: ['Two-Handed Sword'],
      items: ['Daramere’s Cloak', 'Damilu Huskie'],
      spells: ['Death Pact', 'Frost Bolt'],
      pack: 4
    },
    {
      name: 'Ancient Wyrms',
      level: 3,
      heroes: [],
      weapons: ['Two-Handed Sword'],
      items: ['Daramere’s Cloak', 'Damilu Huskie'],
      spells: ['Death Pact', 'Frost Bolt'],
      pack: 5
    },
    {
      name: 'Ancient Protectors',
      level: 3,
      heroes: ['Markennan', 'Grimwolf', 'Gorlandor', 'Linsha', 'Dunardic'],
      weapons: [],
      items: ['Amulet of Power'],
      spells: [],
      pack: 5
    }
  ]
}
