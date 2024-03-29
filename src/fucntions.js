export function formatNumberWithDots(number) {
  const numberString = number.toString();
  const groups = [];
  for (let i = numberString.length; i > 0; i -= 3) {
    groups.unshift(numberString.slice(Math.max(i - 3, 0), i));
  }
  const formattedNumber = groups.join('.');
  return +formattedNumber;
}
export function searchSymbol(symbol, heroes) {
  const searchTerm = symbol.toLowerCase();

  if (searchTerm.length === 0) {
    return heroes;
  }

  console.log(heroes)
  return heroes.filter(hero => hero.name.toLowerCase().startsWith(searchTerm));
}
export function filterData(data, id) {
  let dataArr = [];
  for (let key in data) {
    dataArr.push(data[key]);
  }

  return dataArr.filter((item) => item.id === +id);
}
export function fitlerHeroAbilities(heroAbilities, name) {
  for (let key in heroAbilities) {
    if (key == name) {
      return heroAbilities[key];
    }
  }
}
export const heroLoreFilter = (hero) => {
  return {
    name: hero.localized_name,
    roles: hero.roles,
    agility: hero.primary_attr,
    turboWinRate: ((hero.turbo_wins / hero.turbo_picks) * 100).toFixed(2),
    allPickWinRate: ((hero.pub_win / hero.pub_pick) * 100).toFixed(2),
    proPickWinRate: ((hero.pro_win / hero.pro_pick) * 100).toFixed(2),
  };
};
export const heroObjFilter = (hero) => {
  const heroName = hero.name;
  return {
    name: heroName.replace("npc_dota_hero_", ""),
  };
};
export const heroStatsObjFilter = (hero) => {
  return {
    health: hero.base_health,
    healthRegen: hero.base_health_regen,
    mana: hero.base_mana,
    manaRegen: hero.base_mana_regen,
    attackMin: hero.base_attack_min,
    attackMax: hero.base_attack_max,
    attackRate: hero.attack_rate,
    atackRange: hero.attack_range,
    armor: hero.base_armor,
    moveSpeed: hero.move_speed,
    dayVision: hero.day_vision,
    nightVision: hero.night_vision,
    str: hero.base_str,
    int: hero.base_int,
    agi: hero.base_agi,
    strGain: hero.str_gain,
    agiGain: hero.agi_gain,
    intGain: hero.int_gain,
  };
};
export function filterTalents(talents, allAbilities) {
  return talents.reduce((acc, talent, index) => {
    for (let key in allAbilities) {
      if (talent.name && talent.name === key) {
        const currentRight = allAbilities[key].dname;
        const nextLeft = talents[index + 1]
          ? allAbilities[talents[index + 1].name].dname
          : null;
        if (index % 2 === 0) {
          const obj = {
            right: currentRight,
            left: nextLeft,
          };
          acc.push(obj);
        }
      }
    }
    return acc;
  }, []).reverse();
}
export function fitlerAbilities(abilities, allAbilities) {
  return abilities.map((ability) => {
    for (let key in allAbilities) {
      if (key === ability) {
        return {
          ...allAbilities[key],
          heroName: key,
        };
      }
    }
  });
}