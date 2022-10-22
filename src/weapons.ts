import { GameStateAllPlayerWeapons } from './gamestate'

export interface Weapons {
  grenades: string[]
  secondary?: string
  knife?: string
  primary?: string
  bomb: boolean
}

const grenadeNames = [
  'weapon_decoy',
  'weapon_flashbang',
  'weapon_incgrenade',
  'weapon_molotov',
  'weapon_smokegrenade',
  'weapon_hegrenade',
]

const secondaryNames = [
  'weapon_usp_silencer',
  'weapon_deagle',
  'weapon_glock',
  'weapon_tec9',
  'weapon_p250',
  'weapon_cz75a',
  'weapon_fiveseven',
  'weapon_elite',
  'weapon_hkp2000',
  'weapon_revolver',
]

const weaponsToArray = (weapons: GameStateAllPlayerWeapons): string[] =>
  [
    weapons?.weapon_0?.name || '',
    weapons?.weapon_1?.name || '',
    weapons?.weapon_2?.name || '',
    weapons?.weapon_3?.name || '',
    weapons?.weapon_4?.name || '',
    weapons?.weapon_5?.name || '',
    weapons?.weapon_6?.name || '',
  ].filter((weapon) => weapon !== '')

const isGrenade = (weapon: string): boolean => grenadeNames.includes(weapon)
const isSecondary = (weapon: string): boolean => secondaryNames.includes(weapon)
const isKnife = (weapon: string): boolean => weapon.indexOf('knife') >= 0 || weapon.indexOf('bayonet') >= 0
const isBomb = (weapon: string): boolean => weapon === 'weapon_c4'
const isTaser = (weapon: string): boolean => weapon === 'weapon_taser'
const isPrimary = (weapon: string): boolean =>
  !isGrenade(weapon) && !isSecondary(weapon) && !isKnife(weapon) && !isBomb(weapon) && !isTaser(weapon)

export const classifyWeapons = (weapons: GameStateAllPlayerWeapons): Weapons => {
  const weaponsArray = weaponsToArray(weapons)
  const grenades = weaponsArray.filter(isGrenade).sort().reverse()
  const secondary = weaponsArray.find(isSecondary)
  const knife = weaponsArray.find(isKnife)
  const primary = weaponsArray.find(isPrimary)
  const bomb = weaponsArray.filter(isBomb).length > 0
  return {
    grenades,
    secondary,
    knife,
    primary,
    bomb,
  }
}
