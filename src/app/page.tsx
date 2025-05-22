 "use client";
import { FaTelegram, FaDiscord, FaTwitter } from 'react-icons/fa';
import { GiSombrero, GiTacos } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import mascot from './images/mascot1.jpg';
import mascot2 from './images/mascot2.jpg';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [positions, setPositions] = useState<{x: number, y: number, duration: number}[]>([]);

  useEffect(() => {
    // This will only run on client side
    setPositions(
      Array.from({ length: 20 }, () => ({
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        duration: Math.random() * 30 + 30
      }))
    );
  }, []);

  if (positions.length === 0) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 overflow-hidden"
    >
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ x: pos.x, y: pos.y, rotate: 0 }}
          animate={{ 
            x: pos.x, 
            y: pos.y,
            rotate: 360
          }}
          transition={{ 
            duration: pos.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-4xl text-green-300"
          style={{ 
            left: `${pos.x / 10}%`, 
            top: `${pos.y / 10}%`
          }}
        >
          $
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const socialLinks = {
    telegram: "https://t.me/+ijpA6QeFkDA4ZWY0",
    discord: "https://discord.gg/t2heXgey3c",
    twitter: "https://x.com/Amigos_SOLANA"
  };

  const handleConnectWallet = () => {
    console.log("Connect wallet clicked - implement wallet connection logic here");
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const bounce = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Staking data
  const stakingPools = [
    {
      id: 1,
      name: "Fiesta Pool",
      type: "Token",
      apy: "45%",
      duration: "30 days",
      minStake: "500 AMIGOS",
      totalStaked: "2.8M AMIGOS",
      yourStake: "0 AMIGOS",
      color: "from-green-400 to-emerald-600",
      icon: "🪙"
    },
    {
      id: 2,
      name: "Carnival Pool",
      type: "NFT",
      apy: "75%",
      duration: "60 days",
      minStake: "1 NFT",
      totalStaked: "1,245 NFTs",
      yourStake: "0 NFTs",
      color: "from-purple-400 to-indigo-600",
      icon: "🖼️"
    },
    {
      id: 3,
      name: "Revolution Pool",
      type: "Combo",
      apy: "120%",
      duration: "90 days",
      minStake: "1000 AMIGOS + 1 NFT",
      totalStaked: "1.2M AMIGOS + 845 NFTs",
      yourStake: "0",
      color: "from-yellow-400 to-amber-600",
      icon: "🔥"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-emerald-100 min-h-screen">
      {/* ===== SLIDE 1: HERO ===== */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <AnimatedBackground />

        {/* Mascot with transparent effect */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={popIn}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-green-300 bg-white/20 backdrop-blur-sm"
        >
          <Image
            src={mascot}
            alt="Amigos Mascot"
            fill
            className="object-cover object-center mix-blend-multiply"
            placeholder="blur"
            sizes="(max-width: 768px) 192px, 256px"
            priority
          />
          <div className="absolute inset-0 bg-green-200 opacity-30 rounded-full" />
        </motion.div>
        
        {/* Title with Vacation Postcard style */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="relative mb-8 md:mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center text-white tracking-wide"
              style={{
                fontFamily: "'Luckiest Guy', cursive",
                textShadow: `
                  3px 3px 0 #38a169,
                  -1px -1px 0 #38a169,  
                  1px -1px 0 #38a169,
                  -1px 1px 0 #38a169,
                  1px 1px 0 #38a169
                `,
                WebkitTextStroke: '2px #38a169'
              }}>
            AMIGOS
          </h1>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-lg -z-10 -rotate-3 scale-105" />
        </motion.div>
        
        {/* Social Icons */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={bounce}
          transition={{ delay: 0.6 }}
          className="fixed left-4 bottom-4 md:left-8 md:bottom-8 flex flex-col gap-3 z-50"
        >
          <motion.a 
            whileHover={{ scale: 1.1, rotate: 5 }}
            href={socialLinks.telegram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black hover:bg-green-800 p-3 rounded-lg shadow-lg transition-all text-white text-xl flex items-center justify-center w-12 h-12"
          >
            <FaTelegram />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, rotate: -5 }}
            href={socialLinks.discord} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black hover:bg-indigo-800 p-4 rounded-lg shadow-lg transition-all text-white text-2xl flex items-center justify-center w-14 h-14"
          >
            <FaDiscord />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -5 }}
            href={socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black hover:bg-blue-800 p-3 rounded-full shadow-lg transition-all text-white text-xl flex items-center justify-center w-12 h-12"
          >
            <FaTwitter />
          </motion.a>
        </motion.div>

        {/* Scroll button */}
        <motion.button 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.9 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full shadow-lg transition-all text-white font-bold text-lg flex items-center gap-2 group"
        >
          <span>Take Me Down</span>
          <motion.span 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xl"
          >
            ↓
          </motion.span>
        </motion.button>
      </section>

      {/* ===== SLIDE 2: ABOUT ===== */}
      <section id="about" className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-green-800/90">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto backdrop-blur-sm bg-black/30 rounded-xl border-2 border-green-300/30 p-6 md:p-10"
        >
          <motion.h2 
            variants={popIn}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-white"
          >
            ABOUT <span className="text-yellow-300">AMIGOS</span>
          </motion.h2>
          <div className="space-y-4 md:space-y-6 text-white text-base md:text-lg">
            <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
              Once upon a time, in the wild west of the blockchain, some unlikely heroes — The Amigos — grew tired of constant rug pulls, abandoned projects, and empty promises. Crypto felt more like a desert wasteland than the promised land.
            </motion.p>
            <motion.div variants={fadeInUp} transition={{ delay: 0.3 }} className="border-l-4 border-yellow-300 pl-4 italic">
              So one brave Amigo saddled up, donned his finest sombrero, and vowed to create a project where holders always ride shotgun.
            </motion.div>
            <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
              In the Amigos universe, it is all about loyalty and laughter. Holders are not just degens — they are part of the family. With every NFT minted, every token staked, and every community goal reached, the Amigos ensure their loyal compadres reap the rewards.
            </motion.p>
            <motion.p variants={fadeInUp} transition={{ delay: 0.5 }} className="text-yellow-300 font-medium">
              Together, we are building something that lasts — a fiesta on the blockchain where transparency, fairness, and fun take center stage. So join the adventure, because with the Amigos, the community always comes first... and the party never ends!
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ===== SLIDE 3: HOW TO BUY ===== */}
      <section id="how-to-buy" className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-gradient-to-b from-yellow-900/10 to-green-900/5">
        <div className="max-w-md mx-auto w-full px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={bounce}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-yellow-300"
          >
            HOW TO BUY
          </motion.h2>
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
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl border-2 border-green-300 shadow-lg p-4 md:p-6"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl text-white">{step.icon}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-white/90 text-sm md:text-base">{step.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mascot Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={popIn}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
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
          </motion.div>
        </div>
      </section>

      {/* ===== SLIDE 4: ROADMAP ===== */}
      <section id="roadmap" className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-black">
        <div className="max-w-2xl mx-auto w-full px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white"
          >
            ROADMAP
          </motion.h2>
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
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 md:p-6 rounded-xl border ${phase.special ? 'bg-gradient-to-br from-yellow-900/30 to-black border-yellow-500/40' : 'bg-black/80 border-gray-700'}`}
              >
                <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 ${phase.special ? 'text-yellow-400' : 'text-white'}`}>
                  {phase.title}
                </h3>
                <p className={`leading-relaxed text-sm md:text-base ${phase.special ? 'text-yellow-100' : 'text-gray-300'}`}>
                  {phase.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SLIDE 5: TOKENOMICS ===== */}
      <section id="tokenomics" className="min-h-screen flex items-center justify-center p-4 md:p-12 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white"
          >
            TOKENOMICS
          </motion.h2>
          
          {/* Action Buttons */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12"
          >
            <button 
              onClick={() => document.getElementById('staking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
            >
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
          </motion.div>

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
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl border border-gray-700 p-4 md:p-6"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className={`text-3xl md:text-4xl ${item.color}`}>{item.icon}</span>
                  <h3 className={`text-xl md:text-2xl font-bold ${item.color}`}>{item.title}</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SLIDE 6: STAKING ===== */}
      <section id="staking" className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-green-100 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white tracking-wide"
                style={{
                  fontFamily: "'Luckiest Guy', cursive",
                  textShadow: `
                    3px 3px 0 #38a169,
                    -1px -1px 0 #38a169,  
                    1px -1px 0 #38a169,
                    -1px 1px 0 #38a169,
                    1px 1px 0 #38a169
                  `,
                  WebkitTextStroke: '2px #38a169'
                }}>
              STAKING FIESTA
            </h2>
            <GiTacos className="absolute -right-4 -top-4 text-4xl text-amber-500 rotate-12" />
          </motion.div>
          
          {/* Wallet Connect Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-200 shadow-lg mb-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Connect Your Wallet</h3>
                <p className="text-gray-600">Join the fiesta by connecting your Phantom wallet</p>
              </div>
              <button 
                onClick={handleConnectWallet}
                className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 px-8 py-3 rounded-full shadow-lg transition-all text-white font-bold flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11L16 2L20 6L9 19L4 14L3 11Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M11 3L16 12L21 7L12 2L11 3Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Connect Wallet
              </button>
            </div>
          </motion.div>

          {/* Staking Pools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {stakingPools.map((pool, i) => (
              <motion.div
                key={pool.id}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${pool.color} rounded-2xl p-6 border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative`}
              >
                <div className="absolute -right-6 -top-6 text-8xl opacity-20">{pool.icon}</div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white">{pool.name}</h4>
                      <span className="text-white/80 text-sm">{pool.type} Staking</span>
                    </div>
                    <span className="bg-black/20 px-3 py-1 rounded-full text-white text-sm font-bold">
                      {pool.apy} APY
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white/80">Duration</span>
                      <span className="text-white font-medium">{pool.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Min. Stake</span>
                      <span className="text-white font-medium">{pool.minStake}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Total Staked</span>
                      <span className="text-white font-medium">{pool.totalStaked}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Your Stake</span>
                      <span className="text-yellow-200 font-medium">{pool.yourStake}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg border border-white/20 transition-all font-medium">
                      Stake
                    </button>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg border border-white/20 transition-all font-medium">
                      Unstake
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border-2 border-green-200 p-6 shadow-lg">
              <h4 className="text-gray-500 mb-2">Total Value Staked</h4>
              <p className="text-2xl font-bold text-green-600">$4.2M</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border-2 border-green-200 p-6 shadow-lg">
              <h4 className="text-gray-500 mb-2">Total Rewards Paid</h4>
              <p className="text-2xl font-bold text-amber-600">$1.8M</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border-2 border-green-200 p-6 shadow-lg">
              <h4 className="text-gray-500 mb-2">Active Stakers</h4>
              <p className="text-2xl font-bold text-emerald-600">5,678</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SLIDE 7: CONTACT ===== */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-12 bg-gradient-to-br from-green-600 to-emerald-800 relative overflow-hidden">
        {/* Animated elements */}
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-4 border-yellow-300/30"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full border-4 border-amber-300/30"
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={popIn}
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <GiSombrero className="text-6xl text-amber-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white tracking-wide"
              style={{
                fontFamily: "'Luckiest Guy', cursive",
                textShadow: `
                  3px 3px 0 #1a365d,
                  -1px -1px 0 #1a365d,  
                  1px -1px 0 #1a365d,
                  -1px 1px 0 #1a365d,
                  1px 1px 0 #1a365d
                `,
                WebkitTextStroke: '2px #1a365d'
              }}>
            JOIN THE AMIGOS
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-amber-200">
            The fiesta never stops!
          </h3>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center gap-4 md:gap-6 mb-12"
          >
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href={socialLinks.telegram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black hover:bg-green-800 p-4 rounded-lg shadow-xl transition-all text-white text-2xl"
            >
              <FaTelegram />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: -5 }}
              href={socialLinks.discord} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black hover:bg-indigo-800 p-4 rounded-lg shadow-xl transition-all text-white text-2xl"
            >
              <FaDiscord />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -5 }}
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black hover:bg-blue-800 p-4 rounded-lg shadow-xl transition-all text-white text-2xl"
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="max-w-md mx-auto bg-black/20 backdrop-blur-sm border border-amber-300/30 rounded-lg p-6"
          >
            <p className="text-amber-100 text-center text-sm">
              AMIGOS IS A MEME TOKEN WITH NO INTRINSIC VALUE. THIS IS JUST FOR FUN AND NOT FINANCIAL ADVICE. 
              JOIN THE FIESTA AT YOUR OWN RISK AND DO NOT SPEND WHAT YOU CANNOT AFFORD TO LOSE!
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}