import { Component } from 'react';
import AUDIO from '../App/audio'

class SoundService extends Component {
    constructor(props) {
        super(props);
        this.clickAudio = null
        this.winMoneyAudio = null
        this.successAudio = null
        this.failAudio = null
        this.timerAudio = null
        this.starsAudio = null
    }

    unloud = async() =>{
        await this.clickAudio.unloadAsync()
    }

    clickAudioPlay = async(soundStatus) =>{
        if(soundStatus){
            try {
                if(!this.clickAudio){
                    this.clickAudio = new Expo.Audio.Sound();
                    await this.clickAudio.unloadAsync()
                    await this.clickAudio.loadAsync(AUDIO.click);
                    await this.clickAudio.setVolumeAsync(0.7)
                    await this.clickAudio.replayAsync()
                }
                else
                    await this.clickAudio.replayAsync();
            }
            catch(error){
                console.log('Can not play sound',error)
            }
        }
    }

    moneyAudioPlay = async(soundType) =>{
        let moneySound = AUDIO.money
        if(soundType == 'maxWin')
            moneySound = AUDIO.bigMoney
        if(soundType == 'minWin')
            moneySound = AUDIO.fail
        try {
            this.winMoneyAudio = new Expo.Audio.Sound();
            await this.winMoneyAudio.unloadAsync()
            await this.winMoneyAudio.loadAsync(moneySound);
            await this.winMoneyAudio.setVolumeAsync(0.5)
            await this.winMoneyAudio.replayAsync()
        }
        catch(error){
            console.log('Can not play sound',error)
        }
    }

    successAudioPlay = async()=>{
        try {
            if(!this.successAudio){
                this.successAudio = new Expo.Audio.Sound();
                await this.successAudio.unloadAsync()
                await this.successAudio.loadAsync(AUDIO.success);
                await this.successAudio.setVolumeAsync(0.4)
                await this.successAudio.replayAsync()
            }
            else
                await this.successAudio.replayAsync();
        }
        catch(error){
            console.log('Can not play sound',error)
        }
    }

    starsAudioPlay = async(winningStars)=>{
        let starsSound = AUDIO.star_win_gain_x1
        if(winningStars == 2)
            starsSound = AUDIO.star_win_gain_x2
        else if(winningStars == 3)
            starsSound = AUDIO.star_win_gain_x3
        try {
            if(this.starsAudio)
                await this.starsAudio.unloadAsync()
            this.starsAudio = new Expo.Audio.Sound();
            await this.starsAudio.loadAsync(starsSound);
            await this.starsAudio.setVolumeAsync(0.4)
            await this.starsAudio.replayAsync()
        }
        catch(error){
            console.log('Can not play sound',error)
        }
    }

    failAudioPlay = async() =>{
        try {
            if(!this.failAudio){
                this.failAudio = new Expo.Audio.Sound();
                await this.failAudio.unloadAsync()
                await this.failAudio.loadAsync(AUDIO.fail);
                await this.failAudio.setVolumeAsync(0.6)
                await this.failAudio.replayAsync()
            }
            else
                await this.failAudio.replayAsync();
            
        }
        catch(error){
            console.log('Can not play sound',error)
        }
    }

    timerAudioPlay = async() =>{
        try {
            if(!this.timerAudio){
                this.timerAudio = new Expo.Audio.Sound();
                await this.timerAudio.unloadAsync()
                await this.timerAudio.loadAsync(AUDIO.timerLoop_4Sec);
                await this.timerAudio.setVolumeAsync(0.4)
                await this.timerAudio.replayAsync()
            }
            else
                await this.timerAudio.replayAsync();
        }
        catch(error){
            console.log('Can not play sound',error)
        }
    }

    stopTimerAudioPlay = async()=>{
        if(this.timerAudio)
            this.timerAudio.stopAsync()
    }
}
 
export default SoundService;