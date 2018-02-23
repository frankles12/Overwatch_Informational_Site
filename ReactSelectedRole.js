// Displays depending on the state of the application
function DisplayOffense(props) {

    return (
        <div className="row">
            <div className="col offset-l2">
                <a href="#" onClick={props.doomfist}><img className="responsive-img circle hero-preview hvr-pulse" src="images/doomfist.png"/></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.genji}><img className="responsive-img circle hero-preview hvr-pulse" src="images/genji.png" /></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.mccree}><img className="responsive-img circle hero-preview hvr-pulse" src="images/mccree.png" /></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.pharah}><img className="responsive-img circle hero-preview hvr-pulse" src="images/pharah.png" /></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.reaper}><img className="responsive-img circle hero-preview hvr-pulse" src="images/reaper.png" /></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.soldier}><img className="responsive-img circle hero-preview hvr-pulse" src="images/soldier76.png" /></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.sombra}><img className="responsive-img circle hero-preview hvr-pulse" src="images/sombra.png" /></a>
            </div>
            <div className="col l1">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/tracer.png" />
            </div>
        </div>
    )
}
let hero = '';

function HeroInfo(heroString) {
    let heroInfo = {
        doomfist: {
            passiveIcon: <img src="images/doomfist1.png" />,
            passiveTitle: 'The Best Defense… (Passive)',
            buff: <strong>Buff&#58;</strong>,
            buffInfo: ' +30 or +75 temporary shield per enemy damaged',
            maxShield: <strong>Max Shield&#58;</strong>,
            maxShieldInfo: ' Max 150 temporary shield',
            decay: <strong>Decay&#58;</strong>,
            decayInfo: ' 3 HP per sec decay; 1.5 sec decay buffer',
            doomPassiveDescription: <i>Doomfist generates temporary personal shields when he deals ability damage.</i>,
            handCannonImg: <img src="images/doomfist2.png" />,
            handCannonTitle: 'Hand Cannon',
            doomAmmo: <strong>Ammo&#58;</strong>,
            doomAmmoInfo: ' 4 rounds per clip',
            doomReload: <strong>Reload&#58;</strong>,
            doomReloadInfo: ' 0.75 second reload per round; Max 3-second reload',
            doomType: <strong>Type&#58;</strong>,
            doomTypeInfo: ' Shotgun',
            doomDamage: <strong>Damage&#58;</strong>,
            doomDamageInfo: ' 11 damage per pellet; 6 pellets per shot; Max 66 bodyshot damage',
            doomFireRate: <strong>Fire Rate&#58;</strong>,
            doomFireRateInfo: ' 3.3 shots per sec',
            doomHead: <strong>Fire Rate&#58;</strong>,
            doomHeadInfo: ' Able to headshot',
            doomCannonInfo: <i>Doomfist fires a short-range burst from the knuckles of his fist. Its ammunition is automatically regenerated over a short time.</i>,
            rocketPunchImg: <img src="images/doomfist3.png" />,
            rocketPunchTitle: 'Rocket Punch',
            rocketDmg: <strong>Damage&#58;</strong>,
            rocketDmgInfo: ' 49 – 100 damage; Max 98 – 250 damage if a wall is hit',
            rocketRange: <strong>Damage&#58;</strong>,
            rocketRangeInfo: ' 10-20 m',
            doomCharge: <strong>Charge Time&#58;</strong>,
            doomChargeInfo: ' 1 sec, 2 sec forced release',
            doomRocketCooldown: <strong>Cooldown&#58;</strong>,
            doomRocketCooldownInfo: ' 4-seconds',
            doomRocketInfo: <i>After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall.</i>,
            doomUppercutImg: <img src="images/doomfist4.png" />,
            doomUppercutTitle: 'Rising Uppercut',
            doomUppercutDmg: <strong>Damage&#58;</strong>,
            doomUppercutDmgInfo: ' 50',
            doomUppercutCooldown: <strong>Cooldown&#58;</strong>,
            doomUppercutCooldownInfo: ' 7 seconds',
            doomUppercutInfo: <i>Doomfist uppercuts enemies in front of him into the air.</i>,
            doomSeisImg: <img src="images/doomfistSeis.png"/>,
            doomSeisTitle: 'Seismic Slam',
            doomSeisDmg: <strong>Damage&#58;</strong>,
            doomSeisDmgInfo: ' 10-125 damage',
            doomSeisRange: <strong>Range&#58;</strong>,
            doomSeisRangeInfo: ' 7.5 m',
            doomSeisDuration: <strong>Cast Duration&#58;</strong>,
            doomSeisDurationInfo: ' 1.5 seconds needed for full damage',
            doomSeisCooldown: <strong>Cooldown&#58;</strong>,
            doomSeisCooldownInfo: ' 7 seconds',
            doomSeisInfo: <i>Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him.</i>,
            doomMeteorImg: <img src="images/doomMeteor.png"/>,
            doomMeteorTitle: 'Meteor Strike (Ultimate Ability)',
            doomMeteorDmg: <strong>Damage&#58;</strong>,
            doomMeteorDmgInfo: ' 300 - 10',
            doomMeteorRadius: <strong>Radius&#58;</strong>,
            doomMeteorRadiusInfo: ' 7.5 m',
            doomMeteorCast: <strong>Cast Time&#58;</strong>,
            doomMeteorCastInfo: ' 1 second cast',
            doomMeteorDuration: <strong>Duration&#58;</strong>,
            doomMeteorDurationInfo: ' Lasts 4 seconds',
            doomMeteorInfo: <i>Doomfist leaps into the sky, then crashes to the ground, dealing significant damage.</i>,






        },
        genji: {
            genjiPassiveImg: <img src="images/hanzoSonic.png"/>,
            genjiPassiveTitle: 'Cyber-Agility (Passive)',
            genjiPassiveAbility: <strong>Ability&#58;</strong>,
            genjiPassiveAbilityInfo: 'Climb Walls',
            genjiPassiveInfo: <i>Thanks to his cybernetic abilities, Genji can climb walls and perform jumps in mid-air.</i>,
        },
        mccree: {
            mccreePassiveImg: <img src="images/hanzoSonic.png"/>,
            mccreePassiveTitle: 'Peacekeeper (Single Shot)',
            mccreePassiveAmmo: <strong>Ammo&#58;</strong>,
            mccreePassiveAmmoInfo: '6 per clip',
            mccreePassiveReload: <strong>Reload Time&#58;</strong>,
            mccreePassiveReloadInfo: '1.5 seconds',
            mccreePassiveDamage: <strong>Damage&#58;</strong>,
            mccreePassiveDamageInfo: '20 - 70 damage',
            mccreePassiveFalloff: <strong>Falloff&#58;</strong>,
            mccreePassiveFalloffInfo: '20 - 45 m',

        },
        pharah: {
            pharahPassiveImg: <img src="images/hanzoSonic.png"/>,
            pharahPassiveTitle: 'Hover Jets',
            pharahPassiveInfo: <i>Pharah hovers in mid-air</i>,
        },
        hanzo: {
            hanzoWallimg: <img src="images/hanzoWall.png"/> ,
            hanzoWallTitle: 'Wall Climb (Passive)',
            hanzoWallAbility: <strong>Ability&#58;</strong>,
            hanzoWallAbilityInfo: ' Can climb up walls',
            hanzoWallInfo: <i>Jump at walls to climb at them.</i>,
            hanzoStormImg: <img src="images/hanzoStorm.png"/>,
            hanzoStormTitle: 'Storm Bow',
            hanzoStormAmmo: <strong>Ammo&#58;</strong>,
            hanzoStormAmmoInfo: ' Infinite',
            hanzoStormDamage: <strong>Damage per shot&#58;</strong>,
            hanzoStormDamageInfo: ' 29 - 125',
            hanzoStormRate: <strong>Rate of fire&#58;</strong>,
            hanzoStormRateInfo: ' 0.8 – 2 shots per second',
            hanzoStormCast: <strong>Cast duration&#58;</strong>,
            hanzoStormCastInfo: ' 0.75 seconds to fully charge arrow, 0.5 seconds buffer',
            hanzoStormProjectile: <strong>Projectile Speed&#58;</strong>,
            hanzoStormProjectileInfo: ' 26 – 86.66 m/s',
            hanzoStormMovement: <strong>Movement Speed&#58;</strong>,
            hanzoStormMovementInfo: ' 3.85 m/s',
            hanzoStormHeadshot: <strong>Headshot?&#58;</strong>,
            hanzoStormHeadshotInfo: ' Can headshot',
            hanzoStormInfo: <i>Hanzo nocks and fires an arrow at his target.</i>,
            hanzoSonicImg: <img src="images/hanzoSonic.png"/>,
            hanzoSonicTitle: 'Sonic Arrow',
            hanzoSonicDamage: <strong>Damage&#58;</strong>,
            hanzoSonicDamageInfo: ' 29 - 125',
            hanzoSonicProjectile: <strong>Projectile Speed&#58;</strong>,
            hanzoSonicProjectileInfo: ' 26 - 87 m/s',
            hanzoSonicRadius: <strong>Radius&#58;</strong>,
            hanzoSonicRadiusInfo: ' 10 m',
            hanzoSonicMovement: <strong>Movement Speed&#58;</strong>,
            hanzoSonicMovementInfo: ' 3.85 m/s',
            hanzoSonicDuration: <strong>Duration&#58;</strong>,
            hanzoSonicDurationInfo: ' Lasts 10 seconds',
            hanzoSonicCool: <strong>Cooldown&#58;</strong>,
            hanzoSonicCoolInfo: ' 10-second cooldown',
            hanzoSonicHeadshot: <strong>Headshot?&#58;</strong>,
            hanzoSonicHeadshotInfo: ' Can headshot',
            hanzoSonicInfo: <i>Hanzo launches an arrow that contains a sonar tracking device. Any enemy within its detection radius is visibly marked, making them easier for Hanzo and his allies to hunt down.</i>,

        },
        reaper: {
            reaperPassiveImg: <img src="images/hanzoSonic.png"/>,
            reaperPassiveTitle: 'The Reaping (Passive)',
            reaperPassiveEffect: <strong>Ability&#58;</strong>,
            reaperPassiveEffectInfo: ' 20% of damage done restored as HP',
        },
        soldier: {
            soldierImg: <img src="images/hanzoSonic.png"/>,
            soldierTitle: 'Heavy Pulse Rifle',
            soldierInfo: <i>Soldier: 76’s rifle remains particularly steady while unloading fully-automatic pulse fire.</i>
        },
        sombra: {
            sombraImg: <img src="images/hanzoSonic.png"/>,
            sombraTitle: 'Machine Pistol',
            sombraAmmo: <strong>Ammo&#58;</strong>,
            sombraAmmoInfo: '60 rounds per clip',
        },
        widowmaker: {
            widowImg: <img src="images/hanzoSonic.png"/>,
            widowTitle: 'Widows Kiss',
            widowDamage: <strong>Damage&#58;</strong>,
            widowDamageInfo: '13 per shot',
        },
        bastion: {
            bastionImg: <img src="images/hanzoSonic.png"/>,
            bastionTitle: 'IronClad (Passive)',
            bastionDmg: <strong>Damage Resistance&#58;</strong>,
            bastionDmgInfo: ' +20%',
        },
        reinhardt: {
            reinhardtImg: <img src="images/hanzoSonic.png"/>,
            reinhardtTitle: 'Rocket Hammer',
            reinhardtDmg: <strong>Damage&#58;</strong>,
            reinhardtDmginfo: ' 75 per swing',
        },
        orisa: {
            orisaImg: <img src="images/hanzoSonic.png"/>,
            orisaTitle: 'Fusion Driver',
            orisaDmg: <strong>Damage&#58;</strong>,
            orisaDmgInfo: ' 11',
        },
        winston: {
            winstonImg: <img src="images/hanzoSonic.png"/>,
            winstonTitle: 'Tesla Cannon',
            winstonDamage: <strong>Damage&#58;</strong>,
            winstonDamageinfo: ' 60 damage per second',
        },
        mercy: {
            mercyImg: <img src="images/hanzoSonic.png"/>,
            mercyTitle: 'Angelic Descent (Passive)',
            mercyAbility: <strong>Ability&#58;</strong>,
            mercyAbilityInfo: ' Hold down the jump button to slow descent in the air',
        },
        lucio: {
            lucioImg: <img src="images/hanzoSonic.png"/>,
            lucioTitle: 'Wall Ride (Passive)',
            lucioAbility: <strong>Ability&#58;</strong>,
            lucioAbilityInfo: ' Can ride along a wall',
        },
        zenyatta: {
            zenImg: <img src="images/hanzoSonic.png"/>,
            zenTitle: 'Orb of Destruction (Singular Orb)',
            zenDmg: <strong>Damage&#58;</strong>,
            zenDmgInfo: ' 46'
        }
        
    };

    return heroInfo[heroString];
}

function DisplayHero(props) {
    return (
        <div className="row container">

            <div className="info-boxes col l12">
                <div className="col l3 icon-images">
                    {props.props.passiveIcon}
                    {props.props.hanzoSonicImg}
                    {props.props.genjiPassiveImg}
                    {props.props.mccreePassiveImg}
                    {props.props.pharahPassiveImg}
                    {props.props.reaperPassiveImg}
                    {props.props.soldierImg}
                    {props.props.sombraImg}
                    {props.props.widowImg}
                    {props.props.bastionImg}
                    {props.props.reinhardtImg}
                    {props.props.orisaImg}
                    {props.props.winstonImg}
                    {props.props.mercyImg}
                    {props.props.lucioImg}
                    {props.props.zenImg}
                </div>
                <div className="col l9 passive-title">
                    {props.props.passiveTitle}
                    {props.props.hanzoWallTitle}
                    {props.props.genjiPassiveTitle}
                    {props.props.mccreePassiveTitle}
                    {props.props.pharahPassiveTitle}
                    {props.props.reaperPassiveTitle}
                    {props.props.soldierTitle}
                    {props.props.sombraTitle}
                    {props.props.widowTitle}
                    {props.props.bastionTitle}
                    {props.props.reinhardtTitle}
                    {props.props.orisaTitle}
                    {props.props.winstonTitle}
                    {props.props.mercyTitle}
                    {props.props.lucioTitle}
                    {props.props.zenTitle}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.buff}{props.props.buffInfo}
                    {props.props.hanzoWallAbility}{props.props.hanzoWallAbilityInfo}
                    {props.props.genjiPassiveAbility}{props.props.genjiPassiveAbilityInfo}
                    {props.props.mccreePassiveAmmo}{props.props.mccreePassiveAmmoInfo}
                    {props.props.pharahPassiveInfo}{props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.maxShield}{props.props.maxShieldInfo}
                    {props.props.hanzoWallInfo}
                    {props.props.genjiPassiveInfo}
                    {props.props.mccreePassiveReload}{props.props.mccreePassiveReloadInfo}
                    {props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>

                <div className="col l9 offset-l3 buff-info">
                    {props.props.decay}{props.props.decayInfo}
                    {props.props.mccreePassiveDamage}{props.props.mccreePassiveDamageInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>


                <div className="col l9 offset-l3 buff-info">
                    <br />
                    {props.props.doomPassiveDescription}
                    {props.props.mccreePassiveFalloff}{props.props.mccreePassiveFalloffInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}

                </div>


            </div>


            <div className="info-boxes-cannon col 12">
                <div className="col l3 icon-images">
                    {props.props.handCannonImg}
                    {props.props.hanzoSonicImg}
                    {props.props.genjiPassiveImg}
                    {props.props.mccreePassiveImg}
                    {props.props.pharahPassiveImg}
                    {props.props.reaperPassiveImg}
                    {props.props.soldierImg}
                    {props.props.sombraImg}
                    {props.props.widowImg}
                    {props.props.bastionImg}
                    {props.props.reinhardtImg}
                    {props.props.orisaImg}
                    {props.props.winstonImg}
                    {props.props.mercyImg}
                    {props.props.lucioImg}
                    {props.props.zenImg}

                </div>
                <div className="col l9 passive-title">
                    {props.props.handCannonTitle}
                    {props.props.hanzoStormTitle}
                    {props.props.genjiPassiveTitle}
                    {props.props.mccreePassiveTitle}
                    {props.props.pharahPassiveTitle}
                    {props.props.soldierTitle}
                    {props.props.reaperPassiveTitle}
                    {props.props.sombraTitle}
                    {props.props.widowTitle}
                    {props.props.bastionTitle}
                    {props.props.reinhardtTitle}
                    {props.props.orisaTitle}
                    {props.props.winstonTitle}
                    {props.props.mercyTitle}
                    {props.props.lucioTitle}
                    {props.props.zenTitle}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomAmmo}{props.props.doomAmmoInfo}
                    {props.props.hanzoStormAmmo}{props.props.hanzoStormAmmoInfo}
                    {props.props.genjiPassiveAbility}{props.props.genjiPassiveAbilityInfo}
                    {props.props.mccreePassiveAmmo}{props.props.mccreePassiveAmmoInfo}
                    {props.props.pharahPassiveInfo}{props.props.pharahPassiveInfo}
                    {props.props.soldierInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomReload}{props.props.doomReloadInfo}
                    {props.props.hanzoStormAmmo}{props.props.hanzoStormAmmoInfo}
                    {props.props.genjiPassiveInfo}
                    {props.props.mccreePassiveReload}{props.props.mccreePassiveReloadInfo}
                    {props.props.pharahPassiveInfo}{props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}

                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomType}{props.props.doomTypeInfo}
                    {props.props.hanzoStormDamage}{props.props.hanzoStormDamageInfo}
                    {props.props.mccreePassiveDamage}{props.props.mccreePassiveDamageInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomDamage}{props.props.doomDamageInfo}
                    {props.props.hanzoStormRate}{props.props.hanzoStormRateInfo}
                    {props.props.mccreePassiveFalloff}{props.props.mccreePassiveFalloffInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomFireRate}{props.props.doomFireRateInfo}
                    {props.props.hanzoStormCast}{props.props.hanzoStormCastInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomHead}{props.props.doomHeadInfo}
                    {props.props.hanzoStormProjectile}{props.props.hanzoStormProjectileInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <br />
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomCannonInfo}
                    {props.props.hanzoStormInfo}
                </div>
            </div>


            <div className="info-boxes-cannon col 12">
                <div className="col l3 icon-images">
                    {props.props.rocketPunchImg}
                    {props.props.hanzoSonicImg}
                    {props.props.genjiPassiveImg}
                    {props.props.mccreePassiveImg}
                    {props.props.pharahPassiveImg}
                    {props.props.reaperPassiveImg}
                    {props.props.soldierImg}
                    {props.props.sombraImg}
                    {props.props.widowImg}
                    {props.props.bastionImg}
                    {props.props.reinhardtImg}
                    {props.props.orisaImg}
                    {props.props.winstonImg}
                    {props.props.mercyImg}
                    {props.props.lucioImg}
                    {props.props.zenImg}
                </div>
                <div className="col l9 passive-title">
                    {props.props.rocketPunchTitle}
                    {props.props.hanzoSonicTitle}
                    {props.props.genjiPassiveTitle}
                    {props.props.mccreePassiveTitle}
                    {props.props.pharahPassiveTitle}
                    {props.props.reaperPassiveTitle}
                    {props.props.soldierTitle}
                    {props.props.sombraTitle}
                    {props.props.widowTitle}
                    {props.props.bastionTitle}
                    {props.props.reinhardtTitle}
                    {props.props.orisaTitle}
                    {props.props.winstonTitle}
                    {props.props.mercyTitle}
                    {props.props.lucioTitle}
                    {props.props.zenTitle}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.rocketDmg}{props.props.rocketDmgInfo}
                    {props.props.hanzoSonicDamage}{props.props.hanzoSonicDamageInfo}
                    {props.props.genjiPassiveAbility}{props.props.genjiPassiveAbilityInfo}
                    {props.props.mccreePassiveAmmo}{props.props.mccreePassiveAmmoInfo}
                    {props.props.pharahPassiveInfo}{props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.rocketRange}{props.props.rocketRangeInfo}
                    {props.props.hanzoSonicProjectile}{props.props.hanzoSonicProjectileInfo}
                    {props.props.genjiPassiveInfo}
                    {props.props.mccreePassiveReload}{props.props.mccreePassiveReloadInfo}
                    {props.props.pharahPassiveInfo}{props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>

                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomCharge}{props.props.doomChargeInfo}
                    {props.props.hanzoSonicRadius}{props.props.hanzoSonicRadiusInfo}
                    {props.props.mccreePassiveDamage}{props.props.mccreePassiveDamageInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}{props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>

                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomRocketCooldown}{props.props.doomRocketCooldownInfo}
                    {props.props.hanzoSonicMovement}{props.props.hanzoSonicMovementInfo}
                    {props.props.mccreePassiveFalloff}{props.props.mccreePassiveFalloffInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>

                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomRocketInfo}
                    {props.props.hanzoSonicInfo}
                </div>

            </div>
            <div className="info-boxes col l12">
                <div className="col l3 icon-images">
                    {props.props.doomUppercutImg}
                    {props.props.hanzoSonicImg}
                    {props.props.genjiPassiveImg}
                    {props.props.mccreePassiveImg}
                    {props.props.pharahPassiveImg}
                    {props.props.reaperPassiveImg}
                    {props.props.soldierImg}
                    {props.props.sombraImg}
                    {props.props.widowImg}
                    {props.props.bastionImg}
                    {props.props.reinhardtImg}
                    {props.props.orisaImg}
                    {props.props.winstonImg}
                    {props.props.mercyImg}
                    {props.props.lucioImg}
                    {props.props.zenImg}
                </div>
                <div className="col l9 passive-title">
                    {props.props.doomUppercutTitle}
                    {props.props.hanzoSonicTitle}
                    {props.props.genjiPassiveTitle}
                    {props.props.mccreePassiveTitle}
                    {props.props.pharahPassiveTitle}
                    {props.props.reaperPassiveTitle}
                    {props.props.soldierTitle}
                    {props.props.sombraTitle}
                    {props.props.widowTitle}
                    {props.props.bastionTitle}
                    {props.props.reinhardtTitle}
                    {props.props.orisaTitle}
                    {props.props.winstonTitle}
                    {props.props.mercyTitle}
                    {props.props.lucioTitle}
                    {props.props.zenTitle}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomUppercutDmg}{props.props.doomUppercutDmgInfo}
                    {props.props.hanzoSonicDamage}{props.props.hanzoSonicDamageInfo}
                    {props.props.genjiPassiveAbility}{props.props.genjiPassiveAbilityInfo}
                    {props.props.mccreePassiveAmmo}{props.props.mccreePassiveAmmoInfo}
                    {props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomUppercutCooldown}{props.props.doomUppercutCooldownInfo}
                    {props.props.hanzoSonicProjectile}{props.props.hanzoSonicProjectileInfo}
                    {props.props.genjiPassiveInfo}
                    {props.props.mccreePassiveReload}{props.props.mccreePassiveReloadInfo}
                    {props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>

                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomUppercutInfo}
                    {props.props.hanzoSonicInfo}
                    {props.props.mccreePassiveDamage}{props.props.mccreePassiveDamageInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>

            </div>
            <div className="info-boxes col l12">
                <div className="col l3 icon-images">
                    {props.props.doomSeisImg}
                    {props.props.hanzoSonicImg}
                    {props.props.genjiPassiveImg}
                    {props.props.mccreePassiveImg}
                    {props.props.pharahPassiveImg}
                    {props.props.reaperPassiveImg}
                    {props.props.soldierImg}
                    {props.props.sombraImg}
                    {props.props.widowImg}
                    {props.props.bastionImg}
                    {props.props.reinhardtImg}
                    {props.props.orisaImg}
                    {props.props.winstonImg}
                    {props.props.mercyImg}
                    {props.props.lucioImg}
                    {props.props.zenImg}
                </div>
                <div className="col l9 passive-title">
                    {props.props.doomSeisTitle}
                    {props.props.hanzoSonicTitle}
                    {props.props.genjiPassiveTitle}
                    {props.props.mccreePassiveTitle}
                    {props.props.pharahPassiveTitle}
                    {props.props.reaperPassiveTitle}
                    {props.props.soldierTitle}
                    {props.props.sombraTitle}
                    {props.props.widowTitle}
                    {props.props.bastionTitle}
                    {props.props.reinhardtTitle}
                    {props.props.orisaTitle}
                    {props.props.winstonTitle}
                    {props.props.mercyTitle}
                    {props.props.lucioTitle}
                    {props.props.zenTitle}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomSeisDmg}{props.props.doomSeisDmgInfo}
                    {props.props.hanzoSonicDamage}{props.props.hanzoSonicDamageInfo}
                    {props.props.genjiPassiveAbility}{props.props.genjiPassiveAbilityInfo}
                    {props.props.mccreePassiveAmmo}{props.props.mccreePassiveAmmoInfo}
                    {props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}

                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomSeisRange}{props.props.doomSeisRangeInfo}
                    {props.props.hanzoSonicProjectile}{props.props.hanzoSonicProjectileInfo}
                    {props.props.genjiPassiveInfo}
                    {props.props.mccreePassiveReload}{props.props.mccreePassiveReloadInfo}
                    {props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomSeisDuration}{props.props.doomSeisDurationInfo}
                    {props.props.hanzoSonicProjectile}{props.props.hanzoSonicProjectileInfo}
                    {props.props.mccreePassiveDamage}{props.props.mccreePassiveDamageInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomSeisCooldown}{props.props.doomSeisCooldownInfo}
                    {props.props.hanzoSonicProjectile}{props.props.hanzoSonicProjectileInfo}
                    {props.props.mccreePassiveFalloff}{props.props.mccreePassiveFalloffInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomSeisInfo}
                    {props.props.hanzoSonicInfo}
                </div>
            </div>
            <div className="info-boxes col l12">
                <div className="col l3 icon-images">
                    {props.props.doomMeteorImg}
                    {props.props.hanzoSonicImg}
                    {props.props.genjiPassiveImg}
                    {props.props.mccreePassiveImg}
                    {props.props.pharahPassiveImg}
                    {props.props.reaperPassiveImg}
                    {props.props.soldierImg}
                    {props.props.sombraImg}
                    {props.props.widowImg}
                    {props.props.bastionImg}
                    {props.props.reinhardtImg}
                    {props.props.orisaImg}
                    {props.props.winstonImg}
                    {props.props.mercyImg}
                    {props.props.lucioImg}
                    {props.props.zenImg}
                </div>
                <div className="col l9 passive-title">
                    {props.props.doomMeteorTitle}
                    {props.props.hanzoSonicTitle}
                    {props.props.genjiPassiveTitle}
                    {props.props.mccreePassiveTitle}
                    {props.props.pharahPassiveTitle}
                    {props.props.reaperPassiveTitle}
                    {props.props.soldierTitle}
                    {props.props.sombraTitle}
                    {props.props.widowTitle}
                    {props.props.bastionTitle}
                    {props.props.reinhardtTitle}
                    {props.props.orisaTitle}
                    {props.props.winstonTitle}
                    {props.props.mercyTitle}
                    {props.props.lucioTitle}
                    {props.props.zenTitle}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomMeteorDmg}{props.props.doomMeteorDmgInfo}
                    {props.props.hanzoSonicDamage}{props.props.hanzoSonicDamageInfo}
                    {props.props.genjiPassiveAbility}{props.props.genjiPassiveAbilityInfo}
                    {props.props.mccreePassiveAmmo}{props.props.mccreePassiveAmmoInfo}
                    {props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}

                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomMeteorRadius}{props.props.doomMeteorRadiusInfo}
                    {props.props.hanzoSonicDamage}{props.props.hanzoSonicDamageInfo}
                    {props.props.genjiPassiveInfo}
                    {props.props.mccreePassiveReload}{props.props.mccreePassiveReloadInfo}
                    {props.props.pharahPassiveInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomMeteorCast}{props.props.doomMeteorCastInfo}
                    {props.props.hanzoSonicDamage}{props.props.hanzoSonicDamageInfo}
                    {props.props.mccreePassiveDamage}{props.props.mccreePassiveDamageInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.reinhardtDmg}{props.props.reinhardtDmginfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomMeteorDuration}{props.props.doomMeteorDurationInfo}
                    {props.props.hanzoSonicDamage}{props.props.hanzoSonicDamageInfo}
                    {props.props.mccreePassiveFalloff}{props.props.mccreePassiveFalloffInfo}
                    {props.props.reaperPassiveEffect}{props.props.reaperPassiveEffectInfo}
                    {props.props.soldierInfo}
                    {props.props.sombraAmmo}{props.props.sombraAmmoInfo}
                    {props.props.widowDamage}{props.props.widowDamageInfo}
                    {props.props.bastionDmg}{props.props.bastionDmgInfo}
                    {props.props.orisaDmg}{props.props.orisaDmgInfo}
                    {props.props.winstonDamage}{props.props.winstonDamageinfo}
                    {props.props.mercyAbility}{props.props.mercyAbilityInfo}
                    {props.props.lucioAbility}{props.props.lucioAbilityInfo}
                    {props.props.zenDmg}{props.props.zenDmgInfo}
                </div>
                <div className="col l9 offset-l3 buff-info">
                    {props.props.doomMeteorInfo}
                    {props.props.hanzoSonicInfo}
                </div>
            </div>


        </div>
    )

}

function DisplayDefense(props) {
    return (
        <div className="row">
            <div className="col l1 offset-l3">
                <a href="#" onClick={props.bastion}><img className="responsive-img circle hero-preview hvr-pulse" src="images/bastion.png" /></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.hanzo}><img className="responsive-img circle hero-preview hvr-pulse" src="images/hanzo.png" /></a>
            </div>
            <div className="col l1">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/junkrat.png" />
            </div>
            <div className="col l1">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/mei.png" />
            </div>
            <div className="col l1">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/torbjorn.png" />
            </div>
            <div className="col l1">
                <a href="#" onClick={props.widowmaker}><img className="responsive-img circle hero-preview hvr-pulse" src="images/widowmaker.png" /></a>
            </div>
        </div>
    )
}

function DisplayTank(props) {
    return (
        <div className="row">
            <div className="col l1 offset-l3">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/dva.png" />
            </div>
            <div className="col l1">
                <a href="#" onClick={props.orisa}><img className="responsive-img circle hero-preview hvr-pulse" src="images/orisa.png" /></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.reinhardt}><img className="responsive-img circle hero-preview hvr-pulse" src="images/reinhardt.png" /></a>
            </div>
            <div className="col l1">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/roadhog.png" />
            </div>
            <div className="col l1">
                <a href="#" onClick={props.winston}><img className="responsive-img circle hero-preview hvr-pulse" src="images/winston.png" /></a>
            </div>
            <div className="col l1">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/zarya.png" />
            </div>
        </div>
    )
}

function DisplaySupport(props) {
    return (
        <div className="row">
            <div className="col l1 offset-l3">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/ana.png" />
            </div>
            <div className="col l1">
                <a href="#" onClick={props.lucio}><img className="responsive-img circle hero-preview hvr-pulse" src="images/lucio.png" /></a>
            </div>
            <div className="col l1">
                <a href="#" onClick={props.mercy}><img className="responsive-img circle hero-preview hvr-pulse" src="images/mercy.png" /></a>
            </div>
            <div className="col l1">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/moira.png" />
            </div>
            <div className="col l1">
                <img className="responsive-img circle hero-preview hvr-pulse" src="images/symmetra.png" />
            </div>
            <div className="col l1">
                <a href="#" onClick={props.zenyatta}><img className="responsive-img circle hero-preview hvr-pulse" src="images/zenyatta.png" /></a>
            </div>
        </div>
    )
}

// function InfoWindow(props) {
//     // let doomfistInfo = props.doomfistInfo
//     //
//     // let doomFistStatus = false;
//     // if (doomfistStaus === true)
//     console.log('Stopped here')
//     let doomInput = <h1>Doomfist has arrived</h1>;
//         return (
//             {doomInput}
//         )
//
//
// }
// let doomInput = null;
// function OtherWindow() {
//     console.log('someting else')
//
//     return (
//         <h1>Stuff</h1>
//     )
// }


// function DoomfistDisplay(props){
//     console.log('workin');
//
//     let input = props.input;
//
// }


// class DoomfistInfo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showComponent: false}
//
//     }
//
//     DoomfistClick() {
//         console.log('d is here');
//
//         return(
//             {doomInput}
//         )
//
//
//
//     }
//     componentWillMount(){
//         // this.DoomfistClick()
//     }
//
//     render() {
//         return(
//             <div>
//
//                 {this.state.showComponent ?
//                     <DoomfistDisplay /> :
//                     null
//                 }
//             </div>
//         )
//
//
//     }
// }

class DetermineClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentRole: '',
                        currentHero: ''}

        this.insertDoomfist = this.insertDoomfist.bind(this)
        this.insertGenji = this.insertGenji.bind(this)
        this.insertMccree = this.insertMccree.bind(this)
        this.insertPharah = this.insertPharah.bind(this)
        this.insertHanzo = this.insertHanzo.bind(this)
        this.insertReaper = this.insertReaper.bind(this)
        this.insertSoldier = this.insertSoldier.bind(this)
        this.insertSombra = this.insertSombra.bind(this)
        this.insertWidowmaker = this.insertWidowmaker.bind(this)
        this.insertBastion = this.insertBastion.bind(this)
        this.insertReinhardt = this.insertReinhardt.bind(this)
        this.insertOrisa = this.insertOrisa.bind(this)
        this.insertWinston = this.insertWinston.bind(this)
        this.insertMercy = this.insertMercy.bind(this)
        this.insertLucio = this.insertLucio.bind(this)
        this.insertZenyatta = this.insertZenyatta.bind(this)

    }
    setDoomfist(){
        this.setState({currentHero: 'doomfist'});
    }

    offenseRole() {
        if(localStorage.getItem('Offense')) {
            this.setState({currentRole: 'Offense'});
        }
    }

    defenseRole() {
        if (localStorage.getItem('Defense')) {
            this.setState({currentRole: 'Defense'});
        }
    }

     tankRole() {
         if (localStorage.getItem('Tank')) {
             this.setState({currentRole: 'Tank'});
         }
     }

    supportRole() {
         if (localStorage.getItem('Support')) {
             this.setState({currentRole: 'Support'});
         }
     }

    // When the component mounts run functions to check the localStorage and update the `state` accordingly
    componentDidMount() {
        this.offenseRole()
        this.defenseRole()
        this.tankRole()
        this.supportRole()


    }

    insertDoomfist() {
        hero = 'doomfist';
        // console.log(hero)
        if (hero === 'doomfist') {
            this.setState({currentHero: 'doomfist'})
        }
    }
    insertGenji() {
        hero = 'genji';
        // console.log(hero)
        if (hero === 'genji') {
            this.setState({currentHero: 'genji'})
        }
    }
    insertMccree() {
        hero = 'mccree';
        // console.log(hero)
        if (hero === 'mccree') {
            this.setState({currentHero: 'mccree'})
        }
    }
    insertPharah() {
        hero = 'pharah';
        // console.log(hero)
        if (hero === 'pharah') {
            this.setState({currentHero: 'pharah'})
        }
    }
    insertHanzo() {
        hero = 'hanzo';
        // console.log(hero)
        if (hero === 'hanzo') {
            this.setState({currentHero: 'hanzo'})
        }
    }
    insertReaper() {
        hero = 'reaper';
        // console.log(hero)
        if (hero === 'reaper') {
            this.setState({currentHero: 'reaper'})
        }
    }
    insertSoldier() {
        hero = 'soldier';
        // console.log(hero)
        if (hero === 'soldier') {
            this.setState({currentHero: 'soldier'})
        }
    }
    insertSombra() {
        hero = 'sombra';
        // console.log(hero)
        if (hero === 'sombra') {
            this.setState({currentHero: 'sombra'})
        }
    }
    insertWidowmaker() {
        hero = 'widowmaker';
        // console.log(hero)
        if (hero === 'widowmaker') {
            this.setState({currentHero: 'widowmaker'})
        }
    }
    insertBastion() {
        hero = 'bastion';
        // console.log(hero)
        if (hero === 'bastion') {
            this.setState({currentHero: 'bastion'})
        }
    }
    insertReinhardt() {
        hero = 'reinhardt';
        // console.log(hero)
        if (hero === 'reinhardt') {
            this.setState({currentHero: 'reinhardt'})
        }
    }
    insertOrisa() {
        hero = 'orisa';
        // console.log(hero)
        if (hero === 'orisa') {
            this.setState({currentHero: 'orisa'})
        }
    }
    insertWinston() {
        hero = 'winston';
        // console.log(hero)
        if (hero === 'winston') {
            this.setState({currentHero: 'winston'})
        }
    }
    insertMercy() {
        hero = 'mercy';
        // console.log(hero)
        if (hero === 'mercy') {
            this.setState({currentHero: 'mercy'})
        }
    }
    insertLucio() {
        hero = 'lucio';
        // console.log(hero)
        if (hero === 'lucio') {
            this.setState({currentHero: 'lucio'})
        }
    }
    insertZenyatta() {
        hero = 'zenyatta';
        // console.log(hero)
        if (hero === 'zenyatta') {
            this.setState({currentHero: 'zenyatta'})
        }
    }

    render() {
        let currentRole = this.state.currentRole;
        let currentHero = '';
        let displayClass = null;
        let displayHero = null;
        let renderInfo = null;
        let infoWindow = null;
        if (currentRole === 'Offense') {
            displayClass = <DisplayOffense
                doomfist={this.insertDoomfist} genji={this.insertGenji}
                mccree={this.insertMccree}   pharah={this.insertPharah}
                reaper={this.insertReaper}   soldier={this.insertSoldier}
                sombra={this.insertSombra}   />
        } else if (currentRole === 'Defense') {
            displayClass = <DisplayDefense
                hanzo={this.insertHanzo} widowmaker={this.insertWidowmaker}
                bastion={this.insertBastion}/>
        } else if (currentRole === 'Tank') {
            displayClass = <DisplayTank
                reinhardt={this.insertReinhardt} orisa={this.insertOrisa}
                winston={this.insertWinston}/>
        } else if (currentRole === 'Support') {
            displayClass = <DisplaySupport
                mercy={this.insertMercy}    lucio={this.insertLucio}
                zenyatta={this.insertZenyatta}/>
        }
        if (hero === 'doomfist'){
            currentHero = 'doomfist';
        } else if (hero === 'genji'){
            currentHero = 'genji';
        } else if (hero === 'mccree'){
            currentHero = 'mccree';
        } else if (hero === 'pharah'){
            currentHero = 'pharah';
        } else if (hero === 'hanzo'){
            currentHero = 'hanzo';
        } else if (hero === 'reaper'){
            currentHero = 'reaper';
        } else if (hero === 'soldier'){
            currentHero = 'soldier';
        } else if (hero === 'sombra'){
            currentHero = 'sombra';
        } else if (hero === 'widowmaker'){
            currentHero = 'widowmaker';
        } else if (hero === 'bastion'){
            currentHero = 'bastion';
        } else if (hero === 'reinhardt'){
            currentHero = 'reinhardt';
        } else if (hero === 'orisa'){
            currentHero = 'orisa';
        } else if (hero === 'winston'){
            currentHero = 'winston';
        } else if (hero === 'mercy'){
            currentHero = 'mercy';
        } else if (hero === 'lucio'){
            currentHero = 'lucio';
        } else if (hero === 'zenyatta'){
            currentHero = 'zenyatta';
        }

        if (currentHero) {
            displayHero = <DisplayHero props={HeroInfo(currentHero)}/>
        }



        return (
            <div>
                {displayClass}
                {displayHero}
            </div>


        );

    }

}

ReactDOM.render(
    <DetermineClass />,

    document.getElementById('root')
);