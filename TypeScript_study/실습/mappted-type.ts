type Heros = 'Hulk'|'Capt'|'Thor';
type HeroAges = { [Hero in Heros] : number}
const ages: HeroAges ={
    Hulk : 100,
    Capt : 39,
    Thor : 44,
}