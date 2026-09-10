// Web Audio API Sound Synthesizer for Gear 5 Awakening & UI feedback
// Opt-in only, never autoplayed, respects user mute toggle

class SoundEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = true; // Default muted for accessibility

  private getContext(): AudioContext | null {
    if (this.isMuted) return null;
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Crisp, tactile UI click
  playClick() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Ignore audio failure safely
    }
  }

  // Soft whoosh when hovering cards or changing tabs
  playWhoosh() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch {
      // Ignore
    }
  }

  // Cloud burst puff
  playCloudBurst() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // Ignore
    }
  }

  private drumInterval: number | null = null;

  // Gear 5 Awakening: Drum resonance and energy sweep (single burst)
  playAwakening() {
    this.playAwakeningBeat();
  }

  playAwakeningBeat() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // Heartbeat / Drum of liberation cadence (dum-tak dum-tak)
      [0, 0.16, 0.38, 0.54].forEach((timeOffset, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(idx % 2 === 0 ? 90 : 135, now + timeOffset);
        osc.frequency.exponentialRampToValueAtTime(40, now + timeOffset + 0.12);

        gain.gain.setValueAtTime(0.22, now + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + 0.14);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + timeOffset);
        osc.stop(now + timeOffset + 0.14);
      });

      // Harmonic celestial shimmer
      const chord = [330, 440, 554, 659];
      chord.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + 0.15);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.7);

        gain.gain.setValueAtTime(0.04, now + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + 0.15);
        osc.stop(now + 0.75);
      });
    } catch {
      // Ignore
    }
  }

  startDrumsLoop(durationSeconds: number = 7) {
    this.stopAwakeningDrums();
    let elapsed = 0;
    // Repeat drum beat every 900ms
    this.drumInterval = window.setInterval(() => {
      elapsed += 0.9;
      if (elapsed >= durationSeconds) {
        this.stopAwakeningDrums();
        return;
      }
      this.playAwakeningBeat();
    }, 900);
  }

  stopAwakeningDrums() {
    if (this.drumInterval !== null) {
      clearInterval(this.drumInterval);
      this.drumInterval = null;
    }
  }
}

export const soundEngine = new SoundEngine();
