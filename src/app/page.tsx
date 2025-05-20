 "use client";
import { FaTelegram } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import mascot from './images/mascot1.jpg';
import mascot2 from './images/mascot2.jpg';

export default function Home() {
  const socialLinks = {
    telegram: "https://t.me/+ijpA6QeFkDA4ZWY0",
    discord: "https://discord.gg/t2heXgey3c",
    twitter: "https://x.com/Amigos_SOLANA"
  };

  const handleConnectWallet = () => {
    console.log("Connect wallet clicked - implement wallet connection logic here");
  };

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-green-500">
      {/* Wallet Connect Button - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleConnectWallet}
          className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 transition-all text-white font-medium flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11L16 2L20 6L9 19L4 14L3 11Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M11 3L16 12L21 7L12 2L11 3Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Connect Wallet
        </button>
      </div>

      {/* ===== SLIDE 1: HERO ===== */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center p-4">
        {/* Circular Mascot Image with Glass Effect */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-sm">
          <Image
            src={mascot}
            alt="Amigos Mascot"
            fill
            className="object-cover object-center"
            placeholder="blur"
            sizes="(max-width: 768px) 192px, 256px"
            priority
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
          AMIGOS
        </h1>
        
        {/* Social Icons */}
        <div className="flex gap-4 md:gap-6 mb-8 md:mb-12">
          <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all text-white">
            <FaTelegram className="text-xl md:text-2xl" />
          </a>
          <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all text-white">
            <FaDiscord className="text-xl md:text-2xl" />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all text-white">
            <FaXTwitter className="text-xl md:text-2xl" />
          </a>
        </div>

        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white/10 hover:bg-white/20 px-6 py-2 md:px-8 md:py-3 rounded-full backdrop-blur-sm border border-white/20 transition-all animate-pulse"
        >
          <span className="font-bold text-white text-sm md:text-base">PRESS ME</span>
        </button>
      </section>

      {/* ===== SLIDE 2: ABOUT ===== */}
      <section id="about" className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-green-800/90">
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-black/30 rounded-xl border-2 border-green-300/30 p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-white">
            ABOUT <span className="text-yellow-300">AMIGOS</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-white text-base md:text-lg">
            <p>Once upon a time, in the wild west of the blockchain, some unlikely heroes — The Amigos — grew tired of constant rug pulls, abandoned projects, and empty promises. Crypto felt more like a desert wasteland than the promised land.</p>
            <p className="border-l-4 border-yellow-300 pl-4 italic">So one brave Amigo saddled up, donned his finest sombrero, and vowed to create a project where holders always ride shotgun.</p>
            <p>In the Amigos universe, it is all about loyalty and laughter. Holders are not just degens — they are part of the family. With every NFT minted, every token staked, and every community goal reached, the Amigos ensure their loyal compadres reap the rewards.</p>
            <p className="text-yellow-300 font-medium">Together, we are building something that lasts — a fiesta on the blockchain where transparency, fairness, and fun take center stage. So join the adventure, because with the Amigos, the community always comes first... and the party never ends!</p>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 3: HOW TO BUY ===== */}
      <section id="how-to-buy" className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-gradient-to-b from-yellow-900/10 to-green-900/5">
        <div className="max-w-md mx-auto w-full px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-yellow-300">
            HOW TO BUY
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "CREATE WALLET", 
                content: "Download and install Phantom wallet from AppStore or browser extension",
                icon: "👛"
              },
              {
                title: "GET WL",
                content: "ALL WL WILL GET THE NFT AIRDROPPED. IF YOU SELL - NO TOKEN AIRDROP",
                icon: "🎫"
              },
              {
                title: "SWAP TO AMIGOS",
                content: "When live, use DEXSCREENER with contract address from our website",
                icon: "💱"
              }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl">{step.icon}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-yellow-300 mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-white/90 text-sm md:text-base">{step.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* New Mascot Image */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-sm">
              <Image
                src={mascot2}
                alt="Amigos Mascot 2"
                fill
                className="object-cover object-center"
                placeholder="blur"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SLIDE 4: ROADMAP ===== */}
      <section id="roadmap" className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-black">
        <div className="max-w-2xl mx-auto w-full px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
            ROADMAP
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "PHASE 1",
                content: "Develop the Amigo NFT collection and project branding. Establish smart contracts for staking, burning, and airdrops. Engage the community through social media and sneak peeks."
              },
              {
                title: "PHASE 2",
                content: "Launch the free mint of Amigo NFTs. Fund the liquidity pool through royalties. Distribute tokens via a two-phase airdrop to NFT holders. Open the short-term staking program with exclusive bonuses for early stakers and NFT holders."
              },
              {
                title: "PHASE 3",
                content: "Introduce long-term staking programs and new utilities for token holders. Use treasury reserves for partnerships, growth, and ecosystem innovation. List the token on exchanges and expand the Amigos community."
              },
              {
                title: "PHASE 4",
                content: "Something extraordinary is brewing on the blockchain, reserved for the most loyal Amigos. Only true holders will unlock the next evolution of our ecosystem.",
                special: true
              }
            ].map((phase, i) => (
              <div key={i} className={`p-4 md:p-6 rounded-xl border ${phase.special ? 'bg-gradient-to-br from-yellow-900/30 to-black border-yellow-500/40' : 'bg-black/80 border-gray-700'}`}>
                <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 ${phase.special ? 'text-yellow-400' : 'text-white'}`}>
                  {phase.title}
                </h3>
                <p className={`leading-relaxed text-sm md:text-base ${phase.special ? 'text-yellow-100' : 'text-gray-300'}`}>
                  {phase.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SLIDE 5: TOKENOMICS ===== */}
      <section id="tokenomics" className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
            TOKENOMICS
          </h2>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-yellow-500/30 transition-all duration-300">
              STAKE NFTS
            </button>
            <a 
              href="https://solscan.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              VERIFY TOKEN
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Airdrop",
                content: "50% of total supply airdropped to community in two phases",
                icon: "🎁",
                color: "text-amber-500"
              },
              {
                title: "Staking",
                content: "20% rewards for long-term holders with early bonuses",
                icon: "💰", 
                color: "text-emerald-500"
              },
              {
                title: "Marketing",
                content: "10% for growth campaigns and collaborations",
                icon: "📢",
                color: "text-blue-500"
              },
              {
                title: "Reserves",
                content: "10% for future development and ecosystem needs",
                icon: "🏦",
                color: "text-purple-500"
              },
              {
                title: "Liquidity",
                content: "10% initial pool funding from NFT royalties",
                icon: "💧",
                color: "text-pink-500"
              },
              {
                title: "Team",
                content: "10% vested over 2 years for core contributors",
                icon: "👥",
                color: "text-gray-400"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 rounded-xl border border-gray-700 p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className={`text-3xl md:text-4xl ${item.color}`}>{item.icon}</span>
                  <h3 className={`text-xl md:text-2xl font-bold ${item.color}`}>{item.title}</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SLIDE 6: CONTACT ===== */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-12 bg-black">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
          CONTACT AMIGOS
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 text-yellow-300">
          JOIN OUR COMMUNITY
        </h3>
        <div className="flex gap-4 md:gap-8 mb-8 md:mb-12">
          <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="group bg-white/10 hover:bg-white/20 p-4 md:p-5 rounded-full backdrop-blur-sm transition-all duration-300">
            <FaTelegram className="text-2xl md:text-3xl text-white group-hover:text-blue-400 transition-colors" />
          </a>
          <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer" className="group bg-white/10 hover:bg-white/20 p-4 md:p-5 rounded-full backdrop-blur-sm transition-all duration-300">
            <FaDiscord className="text-2xl md:text-3xl text-white group-hover:text-purple-400 transition-colors" />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="group bg-white/10 hover:bg-white/20 p-4 md:p-5 rounded-full backdrop-blur-sm transition-all duration-300">
            <FaXTwitter className="text-2xl md:text-3xl text-white group-hover:text-blue-400 transition-colors" />
          </a>
        </div>
        <div className="max-w-md mx-auto bg-red-900/20 backdrop-blur-sm border border-red-700/50 rounded-lg p-4 md:p-6">
          <p className="text-red-300 text-center text-xs md:text-sm">
            AMIGOS IS A MEMECOIN AND NFT WITH NO INTRINSIC VALUE OR EXPECTATION OF FINANCIAL RETURN. 
            THERE IS NO FORMAL TEAM OR ROADMAP. THE COIN/NFT IS COMPLETELY USELESS AND FOR ENTERTAINMENT PURPOSES ONLY.
          </p>
        </div>
      </section>
    </div>
  );
}