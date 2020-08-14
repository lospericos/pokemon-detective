/* eslint-disable */
// Theses classes should correspond to the softmax output of your model.

export const MODEL_CLASSES = {
    0: '#063 | Abra |',
    1: '#142 | Aerodactyl |',
    2: '#065 | Alakazam |',
    3: '#024 | Arbok |',
    4: '#059 | Arcanine |',
    5: '#144 | Articuno |',
    6: '#015 | Beedrill |',
    7: '#069 | Bellsprout |',
    8: '#009 | Blastoise |',
    9: '#001 | Bulbasaur |',
    10: '#012 | Butterfree |',
    11: '#010 | Caterpie |',
    12: '#113 | Chansey |',
    13: '#006 | Charizard |',
    14: '#004 | Charmander |',
    15: '#005 | Charmeleon |',
    16: '#036 | Clefable |',
    17: '#035 | Clefairy |',
    18: '#091 | Cloyster |',
    19: '#104 | Cubone |',
    20: '#087 | Dewgong |',
    21: '#050 | Diglett |',
    22: '#132 | Ditto |',
    23: '#085 | Dodrio |',
    24: '#084 | Doduo |',
    25: '#148 | Dragonair |',
    26: '#149 | Dragonite |',
    27: '#147 | Dratini |',
    28: '#096 | Drowzee |',
    29: '#051 | Dugtrio |',
    30: '#133 | Eevee |',
    31: '#023 | Ekans |',
    32: '#125 | Electabuzz |',
    33: '#101 | Electrode |',
    34: '#102 | Exeggcute |',
    35: '#103 | Exeggutor |',
    36: '#083 | Farfetchd |',
    37: '#022 | Fearow |',
    38: '#136 | Flareon |',
    39: '#092 | Gastly |',
    40: '#094 | Gengar |',
    41: '#074 | Geodude |',
    42: '#044 | Gloom |',
    43: '#042 | Golbat |',
    44: '#118 | Goldeen |',
    45: '#055 | Golduck |',
    46: '#076 | Golem |',
    47: '#075 | Graveler |',
    48: '#088 | Grimer |',
    49: '#058 | Growlithe |',
    50: '#130 | Gyarados |',
    51: '#093 | Haunter |',
    52: '#107 | Hitmonchan |',
    53: '#106 | Hitmonlee |',
    54: '#116 | Horsea |',
    55: '#097 | Hypno |',
    56: '#002 | Ivysaur |',
    57: '#039 | Jigglypuff |',
    58: '#135 | Jolteon |',
    59: '#124 | Jynx |',
    60: '#140 | Kabuto |',
    61: '#141 | Kabutops |',
    62: '#064 | Kadabra |',
    63: '#014 | Kakuna |',
    64: '#115 | Kangaskhan |',
    65: '#099 | Kingler |',
    66: '#109 | Koffing |',
    67: '#098 | Krabby |',
    68: '#131 | Lapras |',
    69: '#108 | Lickitung |',
    70: '#068 | Machamp |',
    71: '#067 | Machoke |',
    72: '#066 | Machop |',
    73: '#129 | Magikarp |',
    74: '#126 | Magmar |',
    75: '#081 | Magnemite |',
    76: '#082 | Magneton |',
    77: '#056 | Mankey |',
    78: '#105 | Marowak |',
    79: '#052 | Meowth |',
    80: '#011 | Metapod |',
    81: '#151 | Mew |',
    82: '#150 | Mewtwo |',
    83: '#146 | Moltres |',
    84: '#122 | Mr. Mime |',
    85: '#089 | Muk |',
    86: '#034 | Nidoking |',
    87: '#031 | Nidoqueen |',
    88: '#030 | Nidorina |',
    89: '#033 | Nidorino |',
    90: '#038 | Ninetales |',
    91: '#043 | Oddish |',
    92: '#138 | Omanyte |',
    93: '#139 | Omastar |',
    94: '#095 | Onix |',
    95: '#046 | Paras |',
    96: '#047 | Parasect |',
    97: '#053 | Persian |',
    98: '#018 | Pidgeot |',
    99: '#017 | Pidgeotto |',
    100: '#016 | Pidgey |',
    101: '#025 | Pikachu |',
    102: '#127 | Pinsir |',
    103: '#060 | Poliwag |',
    104: '#061 | Poliwhirl |',
    105: '#062 | Poliwrath |',
    106: '#077 | Ponyta |',
    107: '#137 | Porygon |',
    108: '#057 | Primeape |',
    109: '#054 | Psyduck |',
    110: '#026 | Raichu |',
    111: '#078 | Rapidash |',
    112: '#020 | Raticate |',
    113: '#019 | Rattata |',
    114: '#112 | Rhydon |',
    115: '#111 | Rhyhorn |',
    116: '#027 | Sandshrew |',
    117: '#028 | Sandslash |',
    118: '#123 | Scyther |',
    119: '#117 | Seadra |',
    120: '#119 | Seaking |',
    121: '#086 | Seel |',
    122: '#090 | Shellder |',
    123: '#080 | Slowbro |',
    124: '#079 | Slowpoke |',
    125: '#143 | Ur mum |',
    126: '#021 | Spearow |',
    127: '#007 | Squirtle |',
    128: '#121 | Starmie |',
    129: '#120 | Staryu |',
    130: '#114 | Tangela |',
    131: '#128 | Tauros |',
    132: '#072 | Tentacool |',
    133: '#073 | Tentacruel |',
    134: '#134 | Vaporeon |',
    135: '#049 | Venomoth |',
    136: '#048 | Venonat |',
    137: '#003 | Venusaur |',
    138: '#071 | Victreebel |',
    139: '#045 | Vileplume |',
    140: '#100 | Voltorb |',
    141: '#037 | Vulpix |',
    142: '#008 | Wartortle |',
    143: '#013 | Weedle |',
    144: '#070 | Weepinbell |',
    145: '#110 | Weezing |',
    146: '#040 | Wigglytuff |',
    147: '#145 | Zapdos |',
    148: '#041 | Zubat |',
  };