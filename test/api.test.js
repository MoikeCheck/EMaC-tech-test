const supertest = require("supertest");
const server = require("../server");
const request = supertest(server);
const data = [
  {
    "id": "recipe-59",
    "imageUrl": "http://www.images.com/18",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "demerara sugar", "grams": 25 },
      { "name": "flax", "grams": 66 },
      { "name": "apple juice", "grams": 44 },
      { "name": "oat milk", "grams": 198 }
    ]
  },
  {
    "id": "recipe-31",
    "imageUrl": "http://www.images.com/21",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "strawberries", "grams": 187 },
      { "name": "kale", "grams": 41 },
      { "name": "apple juice", "grams": 64 },
      { "name": "coffee", "grams": 146 },
      { "name": "cocoa nibs", "grams": 154 }
    ]
  },
  {
    "id": "recipe-88",
    "imageUrl": "http://www.images.com/12",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "blueberries", "grams": 114 },
      { "name": "coffee", "grams": 20 },
      { "name": "kale", "grams": 48 }
    ]
  },
  {
    "id": "recipe-74",
    "imageUrl": "http://www.images.com/2",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "coffee", "grams": 25 },
      { "name": "lime", "grams": 140 },
      { "name": "strawberries", "grams": 3 },
      { "name": "apricots", "grams": 24 },
      { "name": "kale", "grams": 50 }
    ]
  },
  {
    "id": "recipe-77",
    "imageUrl": "http://www.images.com/25",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "coconut", "grams": 14 },
      { "name": "coconut", "grams": 57 },
      { "name": "lime", "grams": 153 },
      { "name": "oat milk", "grams": 31 }
    ]
  },
  {
    "id": "recipe-65",
    "imageUrl": "http://www.images.com/5",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "double cream", "grams": 144 },
      { "name": "sugar", "grams": 153 }
    ]
  },
  {
    "id": "recipe-45",
    "imageUrl": "http://www.images.com/12",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "apricots", "grams": 119 },
      { "name": "raisins", "grams": 11 },
      { "name": "lemon juice", "grams": 22 },
      { "name": "kale", "grams": 144 }
    ]
  },
  {
    "id": "recipe-96",
    "imageUrl": "http://www.images.com/7",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "blueberries", "grams": 2 },
      { "name": "cocoa nibs", "grams": 31 }
    ]
  },
  {
    "id": "recipe-17",
    "imageUrl": "http://www.images.com/15",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "apricots", "grams": 60 },
      { "name": "almond milk", "grams": 163 },
      { "name": "flax", "grams": 107 }
    ]
  },
  {
    "id": "recipe-47",
    "imageUrl": "http://www.images.com/20",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "cinnamon", "grams": 195 },
      { "name": "banana", "grams": 113 },
      { "name": "strawberries", "grams": 105 },
      { "name": "cocoa nibs", "grams": 18 },
      { "name": "grapes", "grams": 31 }
    ]
  },
  {
    "id": "recipe-39",
    "imageUrl": "http://www.images.com/17",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "raisins", "grams": 173 },
      { "name": "lime", "grams": 75 }
    ]
  },
  {
    "id": "recipe-55",
    "imageUrl": "http://www.images.com/8",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "strawberries", "grams": 73 },
      { "name": "raisins", "grams": 159 },
      { "name": "mango juice", "grams": 141 },
      { "name": "grapes", "grams": 54 }
    ]
  },
  {
    "id": "recipe-48",
    "imageUrl": "http://www.images.com/15",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "cocoa nibs", "grams": 55 },
      { "name": "double cream", "grams": 86 }
    ]
  },
  {
    "id": "recipe-28",
    "imageUrl": "http://www.images.com/15",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "mango juice", "grams": 9 },
      { "name": "grapes", "grams": 41 },
      { "name": "kale", "grams": 130 }
    ]
  },
  {
    "id": "recipe-83",
    "imageUrl": "http://www.images.com/18",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "kale", "grams": 38 },
      { "name": "cocoa nibs", "grams": 182 },
      { "name": "cocoa nibs", "grams": 46 },
      { "name": "raisins", "grams": 185 },
      { "name": "apple juice", "grams": 158 }
    ]
  },
  {
    "id": "recipe-57",
    "imageUrl": "http://www.images.com/18",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "linseed", "grams": 144 },
      { "name": "banana", "grams": 120 },
      { "name": "flax", "grams": 122 }
    ]
  },
  {
    "id": "recipe-37",
    "imageUrl": "http://www.images.com/16",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "apricots", "grams": 137 },
      { "name": "cinnamon", "grams": 131 },
      { "name": "banana", "grams": 7 }
    ]
  },
  {
    "id": "recipe-1",
    "imageUrl": "http://www.images.com/15",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "apple juice", "grams": 71 },
      { "name": "coffee", "grams": 35 },
      { "name": "raisins", "grams": 183 },
      { "name": "apple juice", "grams": 173 }
    ]
  },
  {
    "id": "recipe-50",
    "imageUrl": "http://www.images.com/23",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "strawberries", "grams": 65 },
      { "name": "cocoa nibs", "grams": 13 }
    ]
  },
  {
    "id": "recipe-78",
    "imageUrl": "http://www.images.com/16",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "raisins", "grams": 98 },
      { "name": "coffee", "grams": 80 },
      { "name": "double cream", "grams": 133 },
      { "name": "blueberries", "grams": 40 },
      { "name": "linseed", "grams": 24 }
    ]
  },
  {
    "id": "recipe-63",
    "imageUrl": "http://www.images.com/25",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "sugar", "grams": 157 },
      { "name": "milk", "grams": 175 },
      { "name": "coconut", "grams": 111 }
    ]
  },
  {
    "id": "recipe-86",
    "imageUrl": "http://www.images.com/3",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "cinnamon", "grams": 24 },
      { "name": "double cream", "grams": 3 },
      { "name": "apple juice", "grams": 163 }
    ]
  },
  {
    "id": "recipe-9",
    "imageUrl": "http://www.images.com/11",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "apricots", "grams": 104 },
      { "name": "blueberries", "grams": 193 }
    ]
  },
  {
    "id": "recipe-26",
    "imageUrl": "http://www.images.com/13",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "coffee", "grams": 169 },
      { "name": "apricots", "grams": 18 },
      { "name": "lemon juice", "grams": 45 },
      { "name": "raisins", "grams": 150 },
      { "name": "grapes", "grams": 106 }
    ]
  },
  {
    "id": "recipe-24",
    "imageUrl": "http://www.images.com/12",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "apple juice", "grams": 170 },
      { "name": "raisins", "grams": 22 }
    ]
  },
  {
    "id": "recipe-80",
    "imageUrl": "http://www.images.com/8",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "mango juice", "grams": 142 },
      { "name": "kale", "grams": 82 },
      { "name": "strawberries", "grams": 5 },
      { "name": "cocoa nibs", "grams": 166 },
      { "name": "linseed", "grams": 45 }
    ]
  },
  {
    "id": "recipe-70",
    "imageUrl": "http://www.images.com/3",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "banana", "grams": 33 },
      { "name": "coconut", "grams": 37 },
      { "name": "coconut", "grams": 166 }
    ]
  },
  {
    "id": "recipe-18",
    "imageUrl": "http://www.images.com/9",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "cinnamon", "grams": 23 },
      { "name": "apple juice", "grams": 25 },
      { "name": "apricots", "grams": 133 },
      { "name": "mango juice", "grams": 193 },
      { "name": "linseed", "grams": 159 }
    ]
  },
  {
    "id": "recipe-71",
    "imageUrl": "http://www.images.com/5",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "lemon juice", "grams": 128 },
      { "name": "cinnamon", "grams": 155 },
      { "name": "kale", "grams": 18 }
    ]
  },
  {
    "id": "recipe-84",
    "imageUrl": "http://www.images.com/12",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "apple juice", "grams": 1 },
      { "name": "linseed", "grams": 79 },
      { "name": "kale", "grams": 48 },
      { "name": "grapes", "grams": 10 }
    ]
  },
  {
    "id": "recipe-67",
    "imageUrl": "http://www.images.com/6",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "honey", "grams": 41 },
      { "name": "apple juice", "grams": 67 },
      { "name": "lime", "grams": 131 },
      { "name": "apple juice", "grams": 115 }
    ]
  },
  {
    "id": "recipe-99",
    "imageUrl": "http://www.images.com/4",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "mango juice", "grams": 45 },
      { "name": "coconut", "grams": 35 },
      { "name": "cocoa nibs", "grams": 156 }
    ]
  },
  {
    "id": "recipe-95",
    "imageUrl": "http://www.images.com/4",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "coconut", "grams": 139 },
      { "name": "flax", "grams": 191 }
    ]
  },
  {
    "id": "recipe-27",
    "imageUrl": "http://www.images.com/9",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "coconut", "grams": 139 },
      { "name": "cinnamon", "grams": 114 },
      { "name": "mango juice", "grams": 59 }
    ]
  },
  {
    "id": "recipe-34",
    "imageUrl": "http://www.images.com/23",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "grapes", "grams": 180 },
      { "name": "flax", "grams": 100 },
      { "name": "double cream", "grams": 174 },
      { "name": "almond milk", "grams": 36 }
    ]
  },
  {
    "id": "recipe-51",
    "imageUrl": "http://www.images.com/4",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "oat milk", "grams": 190 },
      { "name": "flax", "grams": 140 },
      { "name": "almond milk", "grams": 73 },
      { "name": "coconut", "grams": 196 }
    ]
  },
  {
    "id": "recipe-91",
    "imageUrl": "http://www.images.com/24",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "honey", "grams": 27 },
      { "name": "kale", "grams": 60 }
    ]
  },
  {
    "id": "recipe-89",
    "imageUrl": "http://www.images.com/25",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "linseed", "grams": 70 },
      { "name": "strawberries", "grams": 108 },
      { "name": "mango juice", "grams": 108 },
      { "name": "raisins", "grams": 143 }
    ]
  },
  {
    "id": "recipe-22",
    "imageUrl": "http://www.images.com/15",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "lime", "grams": 2 },
      { "name": "apple juice", "grams": 118 },
      { "name": "apple juice", "grams": 20 }
    ]
  },
  {
    "id": "recipe-41",
    "imageUrl": "http://www.images.com/19",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "strawberries", "grams": 114 },
      { "name": "blueberries", "grams": 162 },
      { "name": "oat milk", "grams": 130 },
      { "name": "mango juice", "grams": 67 }
    ]
  },
  {
    "id": "recipe-53",
    "imageUrl": "http://www.images.com/21",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "banana", "grams": 88 },
      { "name": "apricots", "grams": 182 }
    ]
  },
  {
    "id": "recipe-54",
    "imageUrl": "http://www.images.com/20",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "cocoa nibs", "grams": 2 },
      { "name": "blueberries", "grams": 112 },
      { "name": "coconut", "grams": 187 },
      { "name": "strawberries", "grams": 193 },
      { "name": "kale", "grams": 121 }
    ]
  },
  {
    "id": "recipe-85",
    "imageUrl": "http://www.images.com/19",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "raisins", "grams": 177 },
      { "name": "apricots", "grams": 151 },
      { "name": "flax", "grams": 75 },
      { "name": "mango juice", "grams": 15 }
    ]
  },
  {
    "id": "recipe-36",
    "imageUrl": "http://www.images.com/21",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "lime", "grams": 82 },
      { "name": "flax", "grams": 99 }
    ]
  },
  {
    "id": "recipe-52",
    "imageUrl": "http://www.images.com/11",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "lime", "grams": 170 },
      { "name": "kale", "grams": 90 },
      { "name": "apple juice", "grams": 107 },
      { "name": "blueberries", "grams": 129 },
      { "name": "apple juice", "grams": 77 }
    ]
  },
  {
    "id": "recipe-20",
    "imageUrl": "http://www.images.com/5",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "cocoa nibs", "grams": 0 },
      { "name": "blueberries", "grams": 114 }
    ]
  },
  {
    "id": "recipe-90",
    "imageUrl": "http://www.images.com/10",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "apple juice", "grams": 16 },
      { "name": "linseed", "grams": 193 },
      { "name": "coconut", "grams": 62 }
    ]
  },
  {
    "id": "recipe-75",
    "imageUrl": "http://www.images.com/13",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "almond milk", "grams": 151 },
      { "name": "flax", "grams": 39 }
    ]
  },
  {
    "id": "recipe-21",
    "imageUrl": "http://www.images.com/6",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "cocoa nibs", "grams": 31 },
      { "name": "milk", "grams": 103 }
    ]
  },
  {
    "id": "recipe-0",
    "imageUrl": "http://www.images.com/2",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "mango juice", "grams": 130 },
      { "name": "raisins", "grams": 165 },
      { "name": "kale", "grams": 177 }
    ]
  },
  {
    "id": "recipe-64",
    "imageUrl": "http://www.images.com/7",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "raisins", "grams": 128 },
      { "name": "blueberries", "grams": 172 },
      { "name": "lime", "grams": 15 },
      { "name": "mango juice", "grams": 162 },
      { "name": "kale", "grams": 145 }
    ]
  },
  {
    "id": "recipe-16",
    "imageUrl": "http://www.images.com/21",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "apricots", "grams": 185 },
      { "name": "blueberries", "grams": 192 }
    ]
  },
  {
    "id": "recipe-93",
    "imageUrl": "http://www.images.com/4",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "raisins", "grams": 144 },
      { "name": "linseed", "grams": 112 },
      { "name": "cocoa nibs", "grams": 184 },
      { "name": "lemon juice", "grams": 122 },
      { "name": "cocoa nibs", "grams": 115 }
    ]
  },
  {
    "id": "recipe-40",
    "imageUrl": "http://www.images.com/2",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "almond milk", "grams": 22 },
      { "name": "lime", "grams": 78 },
      { "name": "coffee", "grams": 119 },
      { "name": "kale", "grams": 83 },
      { "name": "apricots", "grams": 13 }
    ]
  },
  {
    "id": "recipe-15",
    "imageUrl": "http://www.images.com/1",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "mango juice", "grams": 93 },
      { "name": "grapes", "grams": 126 },
      { "name": "cocoa nibs", "grams": 62 }
    ]
  },
  {
    "id": "recipe-68",
    "imageUrl": "http://www.images.com/25",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "almond milk", "grams": 93 },
      { "name": "flax", "grams": 185 },
      { "name": "linseed", "grams": 0 },
      { "name": "apricots", "grams": 119 }
    ]
  },
  {
    "id": "recipe-42",
    "imageUrl": "http://www.images.com/15",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "sugar", "grams": 166 },
      { "name": "kale", "grams": 90 },
      { "name": "cinnamon", "grams": 72 },
      { "name": "flax", "grams": 127 }
    ]
  },
  {
    "id": "recipe-12",
    "imageUrl": "http://www.images.com/11",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "sugar", "grams": 181 },
      { "name": "oat milk", "grams": 121 },
      { "name": "cocoa nibs", "grams": 137 },
      { "name": "demerara sugar", "grams": 92 }
    ]
  },
  {
    "id": "recipe-19",
    "imageUrl": "http://www.images.com/24",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "milk", "grams": 153 },
      { "name": "mango juice", "grams": 104 }
    ]
  },
  {
    "id": "recipe-35",
    "imageUrl": "http://www.images.com/1",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "linseed", "grams": 110 },
      { "name": "mango juice", "grams": 79 }
    ]
  },
  {
    "id": "recipe-94",
    "imageUrl": "http://www.images.com/2",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "strawberries", "grams": 128 },
      { "name": "coffee", "grams": 31 }
    ]
  },
  {
    "id": "recipe-7",
    "imageUrl": "http://www.images.com/12",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "lime", "grams": 58 },
      { "name": "cinnamon", "grams": 70 }
    ]
  },
  {
    "id": "recipe-72",
    "imageUrl": "http://www.images.com/24",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "almond milk", "grams": 198 },
      { "name": "lemon juice", "grams": 6 },
      { "name": "milk", "grams": 9 },
      { "name": "double cream", "grams": 122 },
      { "name": "cinnamon", "grams": 176 }
    ]
  },
  {
    "id": "recipe-98",
    "imageUrl": "http://www.images.com/16",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "demerara sugar", "grams": 50 },
      { "name": "linseed", "grams": 85 },
      { "name": "banana", "grams": 55 },
      { "name": "blueberries", "grams": 65 }
    ]
  },
  {
    "id": "recipe-33",
    "imageUrl": "http://www.images.com/15",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "double cream", "grams": 195 },
      { "name": "apple juice", "grams": 14 }
    ]
  },
  {
    "id": "recipe-46",
    "imageUrl": "http://www.images.com/1",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "banana", "grams": 28 },
      { "name": "coffee", "grams": 60 },
      { "name": "mango juice", "grams": 125 }
    ]
  },
  {
    "id": "recipe-56",
    "imageUrl": "http://www.images.com/13",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "lime", "grams": 124 },
      { "name": "oat milk", "grams": 32 }
    ]
  },
  {
    "id": "recipe-73",
    "imageUrl": "http://www.images.com/16",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "lemon juice", "grams": 174 },
      { "name": "kale", "grams": 7 }
    ]
  },
  {
    "id": "recipe-43",
    "imageUrl": "http://www.images.com/4",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "cocoa nibs", "grams": 142 },
      { "name": "apricots", "grams": 58 }
    ]
  },
  {
    "id": "recipe-79",
    "imageUrl": "http://www.images.com/17",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "grapes", "grams": 98 },
      { "name": "blueberries", "grams": 151 },
      { "name": "sugar", "grams": 155 },
      { "name": "banana", "grams": 191 },
      { "name": "blueberries", "grams": 74 }
    ]
  },
  {
    "id": "recipe-44",
    "imageUrl": "http://www.images.com/25",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "mango juice", "grams": 12 },
      { "name": "apricots", "grams": 100 },
      { "name": "flax", "grams": 146 },
      { "name": "blueberries", "grams": 187 },
      { "name": "apricots", "grams": 136 }
    ]
  },
  {
    "id": "recipe-23",
    "imageUrl": "http://www.images.com/8",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "sugar", "grams": 111 },
      { "name": "lime", "grams": 145 }
    ]
  },
  {
    "id": "recipe-8",
    "imageUrl": "http://www.images.com/1",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "strawberries", "grams": 160 },
      { "name": "apple juice", "grams": 145 },
      { "name": "kale", "grams": 136 }
    ]
  },
  {
    "id": "recipe-25",
    "imageUrl": "http://www.images.com/3",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "apricots", "grams": 86 },
      { "name": "coffee", "grams": 81 }
    ]
  },
  {
    "id": "recipe-62",
    "imageUrl": "http://www.images.com/11",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "blueberries", "grams": 183 },
      { "name": "demerara sugar", "grams": 116 },
      { "name": "raisins", "grams": 145 }
    ]
  },
  {
    "id": "recipe-30",
    "imageUrl": "http://www.images.com/20",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "flax", "grams": 75 },
      { "name": "grapes", "grams": 199 },
      { "name": "strawberries", "grams": 35 },
      { "name": "apricots", "grams": 7 }
    ]
  },
  {
    "id": "recipe-10",
    "imageUrl": "http://www.images.com/23",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "banana", "grams": 19 },
      { "name": "cocoa nibs", "grams": 120 },
      { "name": "lime", "grams": 114 },
      { "name": "coffee", "grams": 16 },
      { "name": "kale", "grams": 106 }
    ]
  },
  {
    "id": "recipe-2",
    "imageUrl": "http://www.images.com/22",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "lime", "grams": 74 },
      { "name": "demerara sugar", "grams": 183 },
      { "name": "mango juice", "grams": 150 }
    ]
  },
  {
    "id": "recipe-13",
    "imageUrl": "http://www.images.com/15",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "sugar", "grams": 152 },
      { "name": "coffee", "grams": 144 },
      { "name": "strawberries", "grams": 123 },
      { "name": "lemon juice", "grams": 38 }
    ]
  },
  {
    "id": "recipe-38",
    "imageUrl": "http://www.images.com/2",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "mango juice", "grams": 125 },
      { "name": "double cream", "grams": 114 },
      { "name": "oat milk", "grams": 188 },
      { "name": "strawberries", "grams": 144 }
    ]
  },
  {
    "id": "recipe-69",
    "imageUrl": "http://www.images.com/7",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "coconut", "grams": 178 },
      { "name": "milk", "grams": 159 }
    ]
  },
  {
    "id": "recipe-66",
    "imageUrl": "http://www.images.com/25",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "oat milk", "grams": 189 },
      { "name": "apricots", "grams": 62 },
      { "name": "flax", "grams": 69 },
      { "name": "mango juice", "grams": 180 }
    ]
  },
  {
    "id": "recipe-49",
    "imageUrl": "http://www.images.com/2",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "grapes", "grams": 12 },
      { "name": "apricots", "grams": 200 }
    ]
  },
  {
    "id": "recipe-29",
    "imageUrl": "http://www.images.com/13",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "blueberries", "grams": 102 },
      { "name": "blueberries", "grams": 109 },
      { "name": "kale", "grams": 109 }
    ]
  },
  {
    "id": "recipe-6",
    "imageUrl": "http://www.images.com/7",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "coffee", "grams": 47 },
      { "name": "cinnamon", "grams": 108 },
      { "name": "milk", "grams": 109 }
    ]
  },
  {
    "id": "recipe-82",
    "imageUrl": "http://www.images.com/22",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "raisins", "grams": 7 },
      { "name": "lime", "grams": 61 },
      { "name": "raisins", "grams": 149 },
      { "name": "cinnamon", "grams": 90 },
      { "name": "lemon juice", "grams": 57 }
    ]
  },
  {
    "id": "recipe-14",
    "imageUrl": "http://www.images.com/20",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "sugar", "grams": 127 },
      { "name": "apple juice", "grams": 185 }
    ]
  },
  {
    "id": "recipe-97",
    "imageUrl": "http://www.images.com/6",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "oat milk", "grams": 66 },
      { "name": "oat milk", "grams": 176 },
      { "name": "grapes", "grams": 187 }
    ]
  },
  {
    "id": "recipe-32",
    "imageUrl": "http://www.images.com/8",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "raisins", "grams": 193 },
      { "name": "sugar", "grams": 67 },
      { "name": "grapes", "grams": 146 }
    ]
  },
  {
    "id": "recipe-11",
    "imageUrl": "http://www.images.com/20",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "kale", "grams": 20 },
      { "name": "honey", "grams": 108 },
      { "name": "demerara sugar", "grams": 174 },
      { "name": "mango juice", "grams": 81 }
    ]
  },
  {
    "id": "recipe-4",
    "imageUrl": "http://www.images.com/12",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "strawberries", "grams": 39 },
      { "name": "demerara sugar", "grams": 144 },
      { "name": "coconut", "grams": 94 },
      { "name": "apple juice", "grams": 107 }
    ]
  },
  {
    "id": "recipe-81",
    "imageUrl": "http://www.images.com/10",
    "instructions": "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
    "ingredients": [
      { "name": "linseed", "grams": 162 },
      { "name": "lime", "grams": 131 },
      { "name": "apple juice", "grams": 130 },
      { "name": "blueberries", "grams": 186 }
    ]
  },
  {
    "id": "recipe-76",
    "imageUrl": "http://www.images.com/23",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "coffee", "grams": 20 },
      { "name": "strawberries", "grams": 118 },
      { "name": "blueberries", "grams": 151 }
    ]
  },
  {
    "id": "recipe-60",
    "imageUrl": "http://www.images.com/25",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "strawberries", "grams": 181 },
      { "name": "lemon juice", "grams": 109 },
      { "name": "lime", "grams": 26 },
      { "name": "strawberries", "grams": 191 },
      { "name": "cocoa nibs", "grams": 165 }
    ]
  },
  {
    "id": "recipe-61",
    "imageUrl": "http://www.images.com/6",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "banana", "grams": 81 },
      { "name": "apricots", "grams": 77 }
    ]
  },
  {
    "id": "recipe-58",
    "imageUrl": "http://www.images.com/6",
    "instructions": "blend with oat milk and ice, sprinkle with salt",
    "ingredients": [
      { "name": "apple juice", "grams": 182 },
      { "name": "strawberries", "grams": 187 },
      { "name": "grapes", "grams": 133 }
    ]
  },
  {
    "id": "recipe-5",
    "imageUrl": "http://www.images.com/6",
    "instructions": "spin it, twist it, pull it, flick it... bop it!",
    "ingredients": [
      { "name": "coconut", "grams": 190 },
      { "name": "lime", "grams": 82 },
      { "name": "raisins", "grams": 76 },
      { "name": "mango juice", "grams": 49 },
      { "name": "lemon juice", "grams": 171 }
    ]
  },
  {
    "id": "recipe-3",
    "imageUrl": "http://www.images.com/15",
    "instructions": "boil 'em, mash 'em, stick 'em in a blender",
    "ingredients": [
      { "name": "coffee", "grams": 112 },
      { "name": "cocoa nibs", "grams": 66 },
      { "name": "coconut", "grams": 167 },
      { "name": "blueberries", "grams": 72 }
    ]
  },
  {
    "id": "recipe-92",
    "imageUrl": "http://www.images.com/1",
    "instructions": "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
    "ingredients": [
      { "name": "kale", "grams": 67 },
      { "name": "apple juice", "grams": 167 },
      { "name": "lime", "grams": 32 }
    ]
  },
  {
    "id": "recipe-87",
    "imageUrl": "http://www.images.com/5",
    "instructions": "serve deconstructed on a wooden board",
    "ingredients": [
      { "name": "milk", "grams": 187 },
      { "name": "cocoa nibs", "grams": 88 },
      { "name": "lemon juice", "grams": 177 }
    ]
  }
]

describe("GET /api", () => {
  test("/api", async () => {
    const { body } = await request.get("/api").expect(200);
    expect(body.message).toBe("ok");
  });
});

describe(" GET /api/recipes", () => {
  test("should respond with an array of all the menu recipes objects", async () => {
    const { body } = await request.get("/api/recipes").expect(200);
    expect(body).toEqual(data);
  });
  test("should respond with an array of all the menu recipes objects accoding to the query provided", async () => {
    const { body } = await request
      .get("/api/recipes?exclude_ingredients=apples,bananas,carrots")
      .expect(200);
    expect(body).toEqual([
      {
        id: "recipe-59",
        imageUrl: "http://www.images.com/18",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "demerara sugar", grams: 25 },
          { name: "flax", grams: 66 },
          { name: "apple juice", grams: 44 },
          { name: "oat milk", grams: 198 },
        ],
      },
      {
        id: "recipe-31",
        imageUrl: "http://www.images.com/21",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "strawberries", grams: 187 },
          { name: "kale", grams: 41 },
          { name: "apple juice", grams: 64 },
          { name: "coffee", grams: 146 },
          { name: "cocoa nibs", grams: 154 },
        ],
      },
      {
        id: "recipe-88",
        imageUrl: "http://www.images.com/12",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "blueberries", grams: 114 },
          { name: "coffee", grams: 20 },
          { name: "kale", grams: 48 },
        ],
      },
      {
        id: "recipe-74",
        imageUrl: "http://www.images.com/2",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "coffee", grams: 25 },
          { name: "lime", grams: 140 },
          { name: "strawberries", grams: 3 },
          { name: "apricots", grams: 24 },
          { name: "kale", grams: 50 },
        ],
      },
      {
        id: "recipe-77",
        imageUrl: "http://www.images.com/25",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "coconut", grams: 14 },
          { name: "coconut", grams: 57 },
          { name: "lime", grams: 153 },
          { name: "oat milk", grams: 31 },
        ],
      },
      {
        id: "recipe-65",
        imageUrl: "http://www.images.com/5",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "double cream", grams: 144 },
          { name: "sugar", grams: 153 },
        ],
      },
      {
        id: "recipe-45",
        imageUrl: "http://www.images.com/12",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "apricots", grams: 119 },
          { name: "raisins", grams: 11 },
          { name: "lemon juice", grams: 22 },
          { name: "kale", grams: 144 },
        ],
      },
      {
        id: "recipe-96",
        imageUrl: "http://www.images.com/7",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "blueberries", grams: 2 },
          { name: "cocoa nibs", grams: 31 },
        ],
      },
      {
        id: "recipe-17",
        imageUrl: "http://www.images.com/15",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "apricots", grams: 60 },
          { name: "almond milk", grams: 163 },
          { name: "flax", grams: 107 },
        ],
      },
      {
        id: "recipe-39",
        imageUrl: "http://www.images.com/17",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "raisins", grams: 173 },
          { name: "lime", grams: 75 },
        ],
      },
      {
        id: "recipe-55",
        imageUrl: "http://www.images.com/8",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "strawberries", grams: 73 },
          { name: "raisins", grams: 159 },
          { name: "mango juice", grams: 141 },
          { name: "grapes", grams: 54 },
        ],
      },
      {
        id: "recipe-48",
        imageUrl: "http://www.images.com/15",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "cocoa nibs", grams: 55 },
          { name: "double cream", grams: 86 },
        ],
      },
      {
        id: "recipe-28",
        imageUrl: "http://www.images.com/15",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "mango juice", grams: 9 },
          { name: "grapes", grams: 41 },
          { name: "kale", grams: 130 },
        ],
      },
      {
        id: "recipe-83",
        imageUrl: "http://www.images.com/18",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "kale", grams: 38 },
          { name: "cocoa nibs", grams: 182 },
          { name: "cocoa nibs", grams: 46 },
          { name: "raisins", grams: 185 },
          { name: "apple juice", grams: 158 },
        ],
      },
      {
        id: "recipe-37",
        imageUrl: "http://www.images.com/16",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "apricots", grams: 137 },
          { name: "cinnamon", grams: 131 },
          { name: "banana", grams: 7 },
        ],
      },
      {
        id: "recipe-1",
        imageUrl: "http://www.images.com/15",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "apple juice", grams: 71 },
          { name: "coffee", grams: 35 },
          { name: "raisins", grams: 183 },
          { name: "apple juice", grams: 173 },
        ],
      },
      {
        id: "recipe-50",
        imageUrl: "http://www.images.com/23",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "strawberries", grams: 65 },
          { name: "cocoa nibs", grams: 13 },
        ],
      },
      {
        id: "recipe-78",
        imageUrl: "http://www.images.com/16",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "raisins", grams: 98 },
          { name: "coffee", grams: 80 },
          { name: "double cream", grams: 133 },
          { name: "blueberries", grams: 40 },
          { name: "linseed", grams: 24 },
        ],
      },
      {
        id: "recipe-63",
        imageUrl: "http://www.images.com/25",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "sugar", grams: 157 },
          { name: "milk", grams: 175 },
          { name: "coconut", grams: 111 },
        ],
      },
      {
        id: "recipe-86",
        imageUrl: "http://www.images.com/3",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "cinnamon", grams: 24 },
          { name: "double cream", grams: 3 },
          { name: "apple juice", grams: 163 },
        ],
      },
      {
        id: "recipe-9",
        imageUrl: "http://www.images.com/11",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "apricots", grams: 104 },
          { name: "blueberries", grams: 193 },
        ],
      },
      {
        id: "recipe-26",
        imageUrl: "http://www.images.com/13",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "coffee", grams: 169 },
          { name: "apricots", grams: 18 },
          { name: "lemon juice", grams: 45 },
          { name: "raisins", grams: 150 },
          { name: "grapes", grams: 106 },
        ],
      },
      {
        id: "recipe-80",
        imageUrl: "http://www.images.com/8",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "mango juice", grams: 142 },
          { name: "kale", grams: 82 },
          { name: "strawberries", grams: 5 },
          { name: "cocoa nibs", grams: 166 },
          { name: "linseed", grams: 45 },
        ],
      },
      {
        id: "recipe-71",
        imageUrl: "http://www.images.com/5",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "lemon juice", grams: 128 },
          { name: "cinnamon", grams: 155 },
          { name: "kale", grams: 18 },
        ],
      },
      {
        id: "recipe-99",
        imageUrl: "http://www.images.com/4",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "mango juice", grams: 45 },
          { name: "coconut", grams: 35 },
          { name: "cocoa nibs", grams: 156 },
        ],
      },
      {
        id: "recipe-95",
        imageUrl: "http://www.images.com/4",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "coconut", grams: 139 },
          { name: "flax", grams: 191 },
        ],
      },
      {
        id: "recipe-27",
        imageUrl: "http://www.images.com/9",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "coconut", grams: 139 },
          { name: "cinnamon", grams: 114 },
          { name: "mango juice", grams: 59 },
        ],
      },
      {
        id: "recipe-34",
        imageUrl: "http://www.images.com/23",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "grapes", grams: 180 },
          { name: "flax", grams: 100 },
          { name: "double cream", grams: 174 },
          { name: "almond milk", grams: 36 },
        ],
      },
      {
        id: "recipe-51",
        imageUrl: "http://www.images.com/4",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "oat milk", grams: 190 },
          { name: "flax", grams: 140 },
          { name: "almond milk", grams: 73 },
          { name: "coconut", grams: 196 },
        ],
      },
      {
        id: "recipe-91",
        imageUrl: "http://www.images.com/24",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "honey", grams: 27 },
          { name: "kale", grams: 60 },
        ],
      },
      {
        id: "recipe-89",
        imageUrl: "http://www.images.com/25",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "linseed", grams: 70 },
          { name: "strawberries", grams: 108 },
          { name: "mango juice", grams: 108 },
          { name: "raisins", grams: 143 },
        ],
      },
      {
        id: "recipe-41",
        imageUrl: "http://www.images.com/19",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "strawberries", grams: 114 },
          { name: "blueberries", grams: 162 },
          { name: "oat milk", grams: 130 },
          { name: "mango juice", grams: 67 },
        ],
      },
      {
        id: "recipe-54",
        imageUrl: "http://www.images.com/20",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "cocoa nibs", grams: 2 },
          { name: "blueberries", grams: 112 },
          { name: "coconut", grams: 187 },
          { name: "strawberries", grams: 193 },
          { name: "kale", grams: 121 },
        ],
      },
      {
        id: "recipe-85",
        imageUrl: "http://www.images.com/19",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "raisins", grams: 177 },
          { name: "apricots", grams: 151 },
          { name: "flax", grams: 75 },
          { name: "mango juice", grams: 15 },
        ],
      },
      {
        id: "recipe-36",
        imageUrl: "http://www.images.com/21",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "lime", grams: 82 },
          { name: "flax", grams: 99 },
        ],
      },
      {
        id: "recipe-20",
        imageUrl: "http://www.images.com/5",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "cocoa nibs", grams: 0 },
          { name: "blueberries", grams: 114 },
        ],
      },
      {
        id: "recipe-75",
        imageUrl: "http://www.images.com/13",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "almond milk", grams: 151 },
          { name: "flax", grams: 39 },
        ],
      },
      {
        id: "recipe-21",
        imageUrl: "http://www.images.com/6",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "cocoa nibs", grams: 31 },
          { name: "milk", grams: 103 },
        ],
      },
      {
        id: "recipe-0",
        imageUrl: "http://www.images.com/2",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "mango juice", grams: 130 },
          { name: "raisins", grams: 165 },
          { name: "kale", grams: 177 },
        ],
      },
      {
        id: "recipe-64",
        imageUrl: "http://www.images.com/7",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "raisins", grams: 128 },
          { name: "blueberries", grams: 172 },
          { name: "lime", grams: 15 },
          { name: "mango juice", grams: 162 },
          { name: "kale", grams: 145 },
        ],
      },
      {
        id: "recipe-16",
        imageUrl: "http://www.images.com/21",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "apricots", grams: 185 },
          { name: "blueberries", grams: 192 },
        ],
      },
      {
        id: "recipe-93",
        imageUrl: "http://www.images.com/4",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "raisins", grams: 144 },
          { name: "linseed", grams: 112 },
          { name: "cocoa nibs", grams: 184 },
          { name: "lemon juice", grams: 122 },
          { name: "cocoa nibs", grams: 115 },
        ],
      },
      {
        id: "recipe-40",
        imageUrl: "http://www.images.com/2",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "almond milk", grams: 22 },
          { name: "lime", grams: 78 },
          { name: "coffee", grams: 119 },
          { name: "kale", grams: 83 },
          { name: "apricots", grams: 13 },
        ],
      },
      {
        id: "recipe-15",
        imageUrl: "http://www.images.com/1",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "mango juice", grams: 93 },
          { name: "grapes", grams: 126 },
          { name: "cocoa nibs", grams: 62 },
        ],
      },
      {
        id: "recipe-68",
        imageUrl: "http://www.images.com/25",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "almond milk", grams: 93 },
          { name: "flax", grams: 185 },
          { name: "linseed", grams: 0 },
          { name: "apricots", grams: 119 },
        ],
      },
      {
        id: "recipe-42",
        imageUrl: "http://www.images.com/15",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "sugar", grams: 166 },
          { name: "kale", grams: 90 },
          { name: "cinnamon", grams: 72 },
          { name: "flax", grams: 127 },
        ],
      },
      {
        id: "recipe-12",
        imageUrl: "http://www.images.com/11",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "sugar", grams: 181 },
          { name: "oat milk", grams: 121 },
          { name: "cocoa nibs", grams: 137 },
          { name: "demerara sugar", grams: 92 },
        ],
      },
      {
        id: "recipe-19",
        imageUrl: "http://www.images.com/24",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "milk", grams: 153 },
          { name: "mango juice", grams: 104 },
        ],
      },
      {
        id: "recipe-35",
        imageUrl: "http://www.images.com/1",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "linseed", grams: 110 },
          { name: "mango juice", grams: 79 },
        ],
      },
      {
        id: "recipe-94",
        imageUrl: "http://www.images.com/2",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "strawberries", grams: 128 },
          { name: "coffee", grams: 31 },
        ],
      },
      {
        id: "recipe-7",
        imageUrl: "http://www.images.com/12",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "lime", grams: 58 },
          { name: "cinnamon", grams: 70 },
        ],
      },
      {
        id: "recipe-72",
        imageUrl: "http://www.images.com/24",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "almond milk", grams: 198 },
          { name: "lemon juice", grams: 6 },
          { name: "milk", grams: 9 },
          { name: "double cream", grams: 122 },
          { name: "cinnamon", grams: 176 },
        ],
      },
      {
        id: "recipe-56",
        imageUrl: "http://www.images.com/13",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "lime", grams: 124 },
          { name: "oat milk", grams: 32 },
        ],
      },
      {
        id: "recipe-73",
        imageUrl: "http://www.images.com/16",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "lemon juice", grams: 174 },
          { name: "kale", grams: 7 },
        ],
      },
      {
        id: "recipe-43",
        imageUrl: "http://www.images.com/4",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "cocoa nibs", grams: 142 },
          { name: "apricots", grams: 58 },
        ],
      },
      {
        id: "recipe-79",
        imageUrl: "http://www.images.com/17",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "grapes", grams: 98 },
          { name: "blueberries", grams: 151 },
          { name: "sugar", grams: 155 },
          { name: "banana", grams: 191 },
          { name: "blueberries", grams: 74 },
        ],
      },
      {
        id: "recipe-44",
        imageUrl: "http://www.images.com/25",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "mango juice", grams: 12 },
          { name: "apricots", grams: 100 },
          { name: "flax", grams: 146 },
          { name: "blueberries", grams: 187 },
          { name: "apricots", grams: 136 },
        ],
      },
      {
        id: "recipe-23",
        imageUrl: "http://www.images.com/8",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "sugar", grams: 111 },
          { name: "lime", grams: 145 },
        ],
      },
      {
        id: "recipe-8",
        imageUrl: "http://www.images.com/1",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "strawberries", grams: 160 },
          { name: "apple juice", grams: 145 },
          { name: "kale", grams: 136 },
        ],
      },
      {
        id: "recipe-25",
        imageUrl: "http://www.images.com/3",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "apricots", grams: 86 },
          { name: "coffee", grams: 81 },
        ],
      },
      {
        id: "recipe-62",
        imageUrl: "http://www.images.com/11",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "blueberries", grams: 183 },
          { name: "demerara sugar", grams: 116 },
          { name: "raisins", grams: 145 },
        ],
      },
      {
        id: "recipe-30",
        imageUrl: "http://www.images.com/20",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "flax", grams: 75 },
          { name: "grapes", grams: 199 },
          { name: "strawberries", grams: 35 },
          { name: "apricots", grams: 7 },
        ],
      },
      {
        id: "recipe-10",
        imageUrl: "http://www.images.com/23",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "banana", grams: 19 },
          { name: "cocoa nibs", grams: 120 },
          { name: "lime", grams: 114 },
          { name: "coffee", grams: 16 },
          { name: "kale", grams: 106 },
        ],
      },
      {
        id: "recipe-2",
        imageUrl: "http://www.images.com/22",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "lime", grams: 74 },
          { name: "demerara sugar", grams: 183 },
          { name: "mango juice", grams: 150 },
        ],
      },
      {
        id: "recipe-13",
        imageUrl: "http://www.images.com/15",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "sugar", grams: 152 },
          { name: "coffee", grams: 144 },
          { name: "strawberries", grams: 123 },
          { name: "lemon juice", grams: 38 },
        ],
      },
      {
        id: "recipe-38",
        imageUrl: "http://www.images.com/2",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "mango juice", grams: 125 },
          { name: "double cream", grams: 114 },
          { name: "oat milk", grams: 188 },
          { name: "strawberries", grams: 144 },
        ],
      },
      {
        id: "recipe-69",
        imageUrl: "http://www.images.com/7",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "coconut", grams: 178 },
          { name: "milk", grams: 159 },
        ],
      },
      {
        id: "recipe-66",
        imageUrl: "http://www.images.com/25",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "oat milk", grams: 189 },
          { name: "apricots", grams: 62 },
          { name: "flax", grams: 69 },
          { name: "mango juice", grams: 180 },
        ],
      },
      {
        id: "recipe-49",
        imageUrl: "http://www.images.com/2",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "grapes", grams: 12 },
          { name: "apricots", grams: 200 },
        ],
      },
      {
        id: "recipe-29",
        imageUrl: "http://www.images.com/13",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "blueberries", grams: 102 },
          { name: "blueberries", grams: 109 },
          { name: "kale", grams: 109 },
        ],
      },
      {
        id: "recipe-6",
        imageUrl: "http://www.images.com/7",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "coffee", grams: 47 },
          { name: "cinnamon", grams: 108 },
          { name: "milk", grams: 109 },
        ],
      },
      {
        id: "recipe-82",
        imageUrl: "http://www.images.com/22",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "raisins", grams: 7 },
          { name: "lime", grams: 61 },
          { name: "raisins", grams: 149 },
          { name: "cinnamon", grams: 90 },
          { name: "lemon juice", grams: 57 },
        ],
      },
      {
        id: "recipe-14",
        imageUrl: "http://www.images.com/20",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "sugar", grams: 127 },
          { name: "apple juice", grams: 185 },
        ],
      },
      {
        id: "recipe-97",
        imageUrl: "http://www.images.com/6",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "oat milk", grams: 66 },
          { name: "oat milk", grams: 176 },
          { name: "grapes", grams: 187 },
        ],
      },
      {
        id: "recipe-32",
        imageUrl: "http://www.images.com/8",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "raisins", grams: 193 },
          { name: "sugar", grams: 67 },
          { name: "grapes", grams: 146 },
        ],
      },
      {
        id: "recipe-11",
        imageUrl: "http://www.images.com/20",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "kale", grams: 20 },
          { name: "honey", grams: 108 },
          { name: "demerara sugar", grams: 174 },
          { name: "mango juice", grams: 81 },
        ],
      },
      {
        id: "recipe-4",
        imageUrl: "http://www.images.com/12",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "strawberries", grams: 39 },
          { name: "demerara sugar", grams: 144 },
          { name: "coconut", grams: 94 },
          { name: "apple juice", grams: 107 },
        ],
      },
      {
        id: "recipe-81",
        imageUrl: "http://www.images.com/10",
        instructions:
          "crush ingredients with mortar and pestle, mix with whole milk, serve in bowl",
        ingredients: [
          { name: "linseed", grams: 162 },
          { name: "lime", grams: 131 },
          { name: "apple juice", grams: 130 },
          { name: "blueberries", grams: 186 },
        ],
      },
      {
        id: "recipe-76",
        imageUrl: "http://www.images.com/23",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "coffee", grams: 20 },
          { name: "strawberries", grams: 118 },
          { name: "blueberries", grams: 151 },
        ],
      },
      {
        id: "recipe-60",
        imageUrl: "http://www.images.com/25",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "strawberries", grams: 181 },
          { name: "lemon juice", grams: 109 },
          { name: "lime", grams: 26 },
          { name: "strawberries", grams: 191 },
          { name: "cocoa nibs", grams: 165 },
        ],
      },
      {
        id: "recipe-61",
        imageUrl: "http://www.images.com/6",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "banana", grams: 81 },
          { name: "apricots", grams: 77 },
        ],
      },
      {
        id: "recipe-58",
        imageUrl: "http://www.images.com/6",
        instructions: "blend with oat milk and ice, sprinkle with salt",
        ingredients: [
          { name: "apple juice", grams: 182 },
          { name: "strawberries", grams: 187 },
          { name: "grapes", grams: 133 },
        ],
      },
      {
        id: "recipe-5",
        imageUrl: "http://www.images.com/6",
        instructions: "spin it, twist it, pull it, flick it... bop it!",
        ingredients: [
          { name: "coconut", grams: 190 },
          { name: "lime", grams: 82 },
          { name: "raisins", grams: 76 },
          { name: "mango juice", grams: 49 },
          { name: "lemon juice", grams: 171 },
        ],
      },
      {
        id: "recipe-3",
        imageUrl: "http://www.images.com/15",
        instructions: "boil 'em, mash 'em, stick 'em in a blender",
        ingredients: [
          { name: "coffee", grams: 112 },
          { name: "cocoa nibs", grams: 66 },
          { name: "coconut", grams: 167 },
          { name: "blueberries", grams: 72 },
        ],
      },
      {
        id: "recipe-92",
        imageUrl: "http://www.images.com/1",
        instructions:
          "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
        ingredients: [
          { name: "kale", grams: 67 },
          { name: "apple juice", grams: 167 },
          { name: "lime", grams: 32 },
        ],
      },
      {
        id: "recipe-87",
        imageUrl: "http://www.images.com/5",
        instructions: "serve deconstructed on a wooden board",
        ingredients: [
          { name: "milk", grams: 187 },
          { name: "cocoa nibs", grams: 88 },
          { name: "lemon juice", grams: 177 },
        ],
      },
    ]);
  });
});

describe(" GET /api/recipes/:id", () => {
  test("should respond with an object based on the id given by the user", async () => {
    const { body } = await request.get("/api/recipes/recipe-2").expect(200);
    expect(body).toEqual({
      id: "recipe-2",
      imageUrl: "http://www.images.com/22",
      instructions: "spin it, twist it, pull it, flick it... bop it!",
      ingredients: [
        { name: "lime", grams: 74 },
        { name: "demerara sugar", grams: 183 },
        { name: "mango juice", grams: 150 },
      ],
    });
  });
});

// describe(" POST /api/recipes", () => {
//   test("POST /api/recipes", async () => {
//     const newRecipe = {
//       id: "recipe-100",
//       imageUrl: "http://www.images.com/21",
//       instructions: "spin it, twist it, pull it, flick it... bop it!",
//       ingredients: [
//         { name: "strawberries", grams: 187 },
//         { name: "kale", grams: 41 },
//         { name: "apple juice", grams: 64 },
//         { name: "coffee", grams: 146 },
//         { name: "cocoa nibs", grams: 154 },
//       ],
//     };
//   });
// });
