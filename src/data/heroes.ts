export type Hero = {
  name: string
  class: string[]
  attack: string
  weapons: string[]
  items: string[]
  spells: string[]
  pack: number
}

export type PickedHeroes = {
  [key: string]: Hero
}

export type GeneratedHeroes = {
  [key: string]: string
}

export const heroes: Hero[] = [
  {
    name: 'Stormhand',
    class: ['Fighter'],
    attack: 'physical',
    weapons: ['Shortspear', 'Shortsword', 'Boomerang', 'Crystal Dagger', 'Broadsword', 'Longspear'],
    items: [],
    spells: [],
    pack: 1
  },
  {
    name: 'Gorlandor',
    class: ['Fighter'],
    attack: 'physical',
    weapons: ['Battle Axe', 'Broadsword', 'Two-Handed Sword', 'Flail'],
    items: [],
    spells: [],
    pack: 1
  },
  {
    name: 'Pylorian',
    class: ['Wizard'],
    attack: 'magic',
    weapons: ['Crystal Dagger'],
    items: [],
    spells: ['Magic Missile', 'Mind Control'],
    pack: 1
  },
  {
    name: 'Silverhelm',
    class: ['Cleric', 'Fighter'],
    attack: 'physical',
    weapons: ['Cursed Mace', 'King’s Sword'],
    items: ['Holy Symbol'],
    spells: [],
    pack: 1
  },
  {
    name: 'Scathian',
    class: ['Rogue', 'Wizard'],
    attack: 'magic',
    weapons: ['Crystal Dagger'],
    items: ['Amulet of Infravision'],
    spells: ['Arcane Aura'],
    pack: 1
  },
  {
    name: 'Hawkswood',
    class: ['Rogue'],
    attack: 'physical',
    weapons: ['Shortspear', 'Shortbow', 'Crossbow'],
    items: ['Amulet of Infravision'],
    spells: [],
    pack: 1
  },
  {
    name: 'Markennan',
    class: ['Fighter'],
    attack: 'physical',
    weapons: [
      'Shortsword',
      'Broadsword',
      'Two-Handed Sword',
      'Flail',
      'Hammer',
      'Holy Mace',
      'Boomerang',
      'Magi Staff'
    ],
    items: ['Ring of Proficiency'],
    spells: [],
    pack: 3
  },
  {
    name: 'Linsha',
    class: ['Fighter'],
    attack: 'physical',
    weapons: ['Shortsword', 'Boomerang', 'Broadsword', 'Two-Handed Sword', 'Flail'],
    items: ['Ring of Proficiency'],
    spells: [],
    pack: 3
  },
  {
    name: 'Regalen',
    class: ['Wizard'],
    attack: 'magic',
    weapons: ['Crystal Dagger'],
    items: [],
    spells: [],
    pack: 3
  },
  {
    name: 'Baharan',
    class: ['Cleric'],
    attack: 'magic',
    weapons: ['Boomerang', 'Cursed Mace'],
    items: ['Holy Symbol'],
    spells: [],
    pack: 3
  },
  {
    name: 'Nimblefingers',
    class: ['Rogue'],
    attack: 'physical',
    weapons: ['Shortspear', 'Shortbow', 'Crossbow'],
    items: ['Amulet of Infravision'],
    spells: [],
    pack: 3
  },
  {
    name: 'Darameric',
    class: ['Cleric', 'Wizard'],
    attack: 'magic',
    weapons: ['Crystal Dagger', 'Cursed Mace'],
    items: ['Holy Symbol'],
    spells: ['Arcane Aura'],
    pack: 3
  },
  {
    name: 'Moonblades',
    class: ['Fighter', 'Rogue'],
    attack: 'physical',
    weapons: ['King’s Sword', 'Shortbow', 'Crossbow'],
    items: ['Amulet of Infravision'],
    spells: [],
    pack: 4
  },
  {
    name: 'Honormain',
    class: ['Cleric'],
    attack: 'physical',
    weapons: ['Cursed Mace'],
    items: ['Holy Symbol'],
    spells: [],
    pack: 4
  },
  {
    name: 'Grimwolf',
    class: ['Fighter'],
    attack: 'physical',
    weapons: ['Shortsword', 'Broadsword', 'Flail'],
    items: [],
    spells: [],
    pack: 4
  },
  {
    name: 'Stormskull',
    class: ['Wizard'],
    attack: 'magic',
    weapons: ['Crystal Dagger'],
    items: [],
    spells: [],
    pack: 4
  },
  {
    name: 'Darkrend',
    class: ['Wizard'],
    attack: 'magic',
    weapons: ['Crystal Dagger'],
    items: [],
    spells: [],
    pack: 4
  },
  {
    name: 'Jadress',
    class: ['Rogue'],
    attack: 'physical',
    weapons: ['Shortbow', 'Crossbow'],
    items: ['Amulet of Infravision'],
    spells: [],
    pack: 4
  },
  {
    name: 'Regian',
    class: ['Cleric'],
    attack: 'magic',
    weapons: ['Shortspear', 'Cursed Mace'],
    items: ['Holy Symbol'],
    spells: [],
    pack: 5
  },
  {
    name: 'Dunardic',
    class: ['Fighter'],
    attack: 'physical',
    weapons: ['Shortsword', 'Broadsword', 'Flail'],
    items: [],
    spells: [],
    pack: 5
  },
  {
    name: 'Aird',
    class: ['Rogue'],
    attack: 'physical',
    weapons: ['Boomerang', 'Shortbow', 'Crossbow'],
    items: ['Amulet of Infravision'],
    spells: [],
    pack: 5
  },
  {
    name: 'Arcanian',
    class: ['Wizard'],
    attack: 'magic',
    weapons: ['Crystal Dagger'],
    items: [],
    spells: ['Creeping Death'],
    pack: 5
  },
  {
    name: 'Veris',
    class: ['Wizard'],
    attack: 'magic',
    weapons: ['Crystal Dagger, Shortbow'],
    items: [],
    spells: [],
    pack: 5
  },
  {
    name: 'Terakian',
    class: ['Cleric', 'Fighter'],
    attack: 'physical',
    weapons: ['Cursed Mace', 'King’s Sword'],
    items: ['Holy Symbol'],
    spells: [],
    pack: 5
  }
]
