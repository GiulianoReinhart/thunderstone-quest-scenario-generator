type Room = {
  name: string
  pack: number
}

type Rooms = {
  [key: number]: Room[]
}

export const rooms: Rooms = {
  1: [
    {
      name: 'Abandoned Gate',
      pack: 1
    },
    {
      name: 'Mine',
      pack: 1
    },
    {
      name: 'Alchemy Chamber',
      pack: 3
    },
    {
      name: 'The Servants’ Tombs',
      pack: 3
    },
    {
      name: 'Air Temple',
      pack: 4
    },
    {
      name: 'Water Temple',
      pack: 4
    },
    {
      name: 'Gate Cavern',
      pack: 5
    }
  ],
  2: [
    {
      name: 'Crypt',
      pack: 1
    },
    {
      name: 'Sunken Well',
      pack: 1
    },
    {
      name: 'Bog',
      pack: 3
    },
    {
      name: 'Sunken Graveyard',
      pack: 3
    },
    {
      name: 'Earth Temple',
      pack: 4
    },
    {
      name: 'Fire Temple',
      pack: 4
    },
    {
      name: 'Dangerous Passageway',
      pack: 5
    }
  ],
  3: [
    {
      name: 'Throne Room',
      pack: 1
    },
    {
      name: 'Vault',
      pack: 1
    },
    {
      name: 'Blood Altar Room',
      pack: 3
    },
    {
      name: 'The Lich’s Tomb',
      pack: 3
    },
    {
      name: 'Abyssal Temple',
      pack: 4
    },
    {
      name: 'Celestial Temple',
      pack: 4
    },
    {
      name: 'Fire Chasm',
      pack: 5
    }
  ]
}
