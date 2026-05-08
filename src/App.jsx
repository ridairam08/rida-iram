import { useState, useEffect, useRef, useCallback } from "react";
import product1 from "./assets/images/product1.jpg";
import product2 from "./assets/images/product2.jpg";
import product3 from "./assets/images/product3.jpg";
import product4 from "./assets/images/product4.jpg";
import product5 from "./assets/images/product5.jpg";
import birthdayGifts from "./assets/images/birthday gifts.jpg";
import coupleGift from "./assets/images/couple gift.jpg";
import giftHamper from "./assets/images/gift hamper.jpg";
import embroideryGift from "./assets/images/embroidery gift.jpg";
import coupleFrame from "./assets/images/couple-frame.jpg";
import chocolateTower from "./assets/images/chocolate-tower.jpg";
import birthdayBloom from "./assets/images/birthday-bloom.jpg";
import flowerBouquet from "./assets/images/flower-bouquet.jpg";
import phoneCharm from "./assets/images/phone-charm.jpg";
import wallDecor from "./assets/images/wall-decor.jpg";
import handpaintedFrame from "./assets/images/handpainted-frame.jpg";
import fragranceCandle from "./assets/images/fragrance-candle.jpg";
import gift1 from "./assets/images/gift1.jpg";
import gift2 from "./assets/images/gift2.jpg";
// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Great+Vibes&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ivory: #faf7f2;
      --cream: #f5ede0;
      --blush: #e8c4b8;
      --rose: #c9897a;
      --dusty-rose: #b5695a;
      --gold: #c9a96e;
      --gold-light: #e8d5a3;
      --gold-dark: #9a7540;
      --charcoal: #2c2420;
      --warm-gray: #6b5e58;
      --soft-gray: #d4c5bc;
      --lavender: #c8b8d4;
      --sage: #a8b89a;
      --white: #ffffff;
      --shadow-soft: 0 4px 24px rgba(44,36,32,0.08);
      --shadow-medium: 0 8px 40px rgba(44,36,32,0.12);
      --shadow-strong: 0 16px 60px rgba(44,36,32,0.18);
      --radius-sm: 12px;
      --radius-md: 20px;
      --radius-lg: 32px;
      --radius-xl: 48px;
      --transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    html { scroll-behavior: smooth; }

    body {
    html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
}
      font-family: 'DM Sans', sans-serif;
      background: var(--ivory);
      color: var(--charcoal);
      overflow-x: hidden;
      line-height: 1.6;
    }

    h1,h2,h3,h4,h5 {
      font-family: 'Cormorant Garamond', serif;
      line-height: 1.2;
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--cream); }
    ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }

    /* Animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(40px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-12px); }
    }
    @keyframes pulse-ring {
      0%   { box-shadow: 0 0 0 0 rgba(201,169,110,0.4); }
      100% { box-shadow: 0 0 0 20px rgba(201,169,110,0); }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-fade-up  { animation: fadeUp 0.7s ease forwards; }
    .animate-fade-in  { animation: fadeIn 0.5s ease forwards; }
    .animate-float    { animation: float 3s ease-in-out infinite; }

    /* Glassmorphism */
    .glass {
      background: rgba(255,255,255,0.55);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.6);
    }

    /* Gold gradient text */
    .gold-text {
      background: linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light), var(--gold));
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }

    /* Buttons */
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, var(--dusty-rose), var(--rose));
      color: white;
      padding: 14px 32px;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.5px;
      transition: var(--transition);
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(181,105,90,0.35);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(181,105,90,0.45);
      background: linear-gradient(135deg, var(--rose), var(--dusty-rose));
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      color: var(--charcoal);
      padding: 13px 30px;
      border-radius: 50px;
      border: 1.5px solid var(--gold);
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.5px;
      transition: var(--transition);
      text-decoration: none;
    }
    .btn-secondary:hover {
      background: var(--gold);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(201,169,110,0.3);
    }

    .btn-gold {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, var(--gold-dark), var(--gold));
      color: white;
      padding: 14px 32px;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.5px;
      transition: var(--transition);
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(201,169,110,0.35);
    }
    .btn-gold:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(201,169,110,0.5);
    }

    /* Section title */
    .section-label {
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 12px;
      display: block;
    }
    .section-title {
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 600;
      color: var(--charcoal);
      margin-bottom: 16px;
    }
    .section-sub {
      font-size: 15px;
      color: var(--warm-gray);
      max-width: 520px;
      line-height: 1.7;
    }

    /* Product card */
    .product-card {
      background: white;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-soft);
      transition: var(--transition);
      cursor: pointer;
      position: relative;
    }
    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-strong);
    }
    .product-card:hover .card-actions { opacity: 1; transform: translateY(0); }
    .product-card:hover .card-img { transform: scale(1.05); }

    .card-img-wrap {
      overflow: hidden;
      position: relative;
      aspect-ratio: 1;
      background: var(--cream);
    }
    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .card-actions {
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%) translateY(12px);
      display: flex;
      gap: 8px;
      opacity: 0;
      transition: var(--transition);
      white-space: nowrap;
    }
    .card-action-btn {
      background: white;
      border: none;
      padding: 8px 14px;
      border-radius: 50px;
      font-size: 12px;
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
      box-shadow: var(--shadow-soft);
      display: flex;
      align-items: center;
      gap: 4px;
      color: var(--charcoal);
    }
    .card-action-btn:hover { background: var(--charcoal); color: white; }
    .card-action-btn.wish:hover { background: var(--dusty-rose); color: white; }

    .card-body { padding: 16px 18px 18px; }
    .card-cat {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 6px;
    }
    .card-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 17px;
      font-weight: 600;
      color: var(--charcoal);
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .card-price {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .price-new {
      font-size: 16px;
      font-weight: 600;
      color: var(--dusty-rose);
    }
    .price-old {
      font-size: 13px;
      color: var(--soft-gray);
      text-decoration: line-through;
    }
    .price-badge {
      font-size: 10px;
      background: var(--blush);
      color: var(--dusty-rose);
      padding: 2px 7px;
      border-radius: 50px;
      font-weight: 600;
    }
    .card-stars { color: var(--gold); font-size: 11px; margin-bottom: 4px; }

    /* Badge */
    .badge {
      position: absolute;
      top: 12px;
      left: 12px;
      padding: 4px 12px;
      border-radius: 50px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      z-index: 2;
    }
    .badge-new { background: var(--charcoal); color: white; }
    .badge-sale { background: var(--dusty-rose); color: white; }
    .badge-hot { background: var(--gold); color: white; }

    /* Input fields */
    input, textarea, select {
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
    }

    /* Overlay */
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(44,36,32,0.5);
      backdrop-filter: blur(4px);
      z-index: 100;
      animation: fadeIn 0.3s ease;
    }

    /* Modal */
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 101;
      animation: fadeUp 0.4s ease;
      max-height: 90vh;
      overflow-y: auto;
    }

    /* Toast */
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--charcoal);
      color: white;
      padding: 14px 24px;
      border-radius: var(--radius-sm);
      font-size: 13px;
      font-weight: 500;
      z-index: 999;
      animation: slideLeft 0.4s ease;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: var(--shadow-strong);
    }

    /* Responsive grid */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 24px;
    }

    /* Marquee */
    .marquee-track {
      display: flex;
      animation: marquee 20s linear infinite;
    }

    /* FAQ */
    .faq-item {
      border-bottom: 1px solid var(--soft-gray);
      padding: 20px 0;
    }
    .faq-q {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-family: 'Cormorant Garamond', serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--charcoal);
      transition: var(--transition);
    }
    .faq-q:hover { color: var(--dusty-rose); }
    .faq-a {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease, padding 0.3s ease;
      font-size: 14px;
      color: var(--warm-gray);
      line-height: 1.7;
    }
    .faq-a.open { max-height: 300px; padding-top: 12px; }

    /* Steps */
    .step-line { position: absolute; top: 20px; left: calc(50% + 24px); right: calc(-50% + 24px); height: 2px; background: var(--soft-gray); }
    .step-line.done { background: var(--gold); }

    /* Range input */
    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background: linear-gradient(to right, var(--gold) 0%, var(--gold) 60%, var(--soft-gray) 60%, var(--soft-gray) 100%);
      outline: none;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--gold);
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(201,169,110,0.4);
    }

    /* Gallery */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 200px);
      gap: 12px;
    }
    .gallery-item:first-child { grid-row: span 2; }

    @media (max-width: 768px) {
      .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
      .gallery-item:first-child { grid-row: span 1; }
      .products-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    }
    @media (max-width: 480px) {
      .products-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    }
  `}</style>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id:1, name:"Eternal Love Frame", cat:"Couple Gifts", price:1299, old:1799, img:coupleFrame, badge:"hot", rating:4.9, reviews:128, desc:"A beautifully crafted wooden frame with custom names and date engraved in gold.", tags:["couple","custom","frame"] },
  { id:2, name:"Chocolate Tower", cat:"Chocolates", price:2499, old:3299, img:chocolateTower, badge:"sale", rating:4.8, reviews:94, desc:"A tower of indulgence,crafted to make celebrations sweeter.", tags:["hamper","luxury","birthday"] },
  { id:3, name:"Birthday Bloom Box", cat:"Birthday", price:899, old:null, img:birthdayBloom, badge:"new", rating:4.7, reviews:67, desc:"A curated hamper where every detail whispers your feelings,it includes personalized bottle,handwritten letter,sweet chocolates-love boxed.", tags:["birthday","hamper"] },
  { id:4, name:"Flower Bouquet", cat:"Couple Gifts", price:1599, old:1999, img:flowerBouquet, badge:null, rating:5.0, reviews:203, desc:"Fresh flowers,arranged to turn moments into memories.", tags:["couple","custom","bridal"] },
  { id:5, name:"Phone Charms ", cat:"Charms", price:219, old:249, img:phoneCharm, badge:"sale", rating:4.6, reviews:88, desc:"Not just an accessory.It's your phone's personality.", tags:["customize initial","elegant Charms"] },
  { id:6, name:"Wall Decor", cat:"Custom", price:1199, old:null, img:wallDecor, badge:"new", rating:4.8, reviews:45, desc:"Where rustic wood meets sleek acrylic-your name,framed beautifully.", tags:["custom","floralhoop","acrylic name"] },
  { id:7, name:"Hand Painted Frame", cat:"Couple Gifts", price:699, old:999, img:handpaintedFrame, badge:null, rating:4.5, reviews:156, desc:"Your love story,handpainted and framed forever.For wedddings,anniversary,or just because-make it art.", tags:["couple","mug"] },
  { id:8, name:"Fragnance Candles", cat:"Candles", price:1099, old:1399, img:fragranceCandle, badge:"hot", rating:4.9, reviews:112, desc:"Hand-poured soy wax candles in signature scents, beautifully packed.", tags:["candle","hamper"] },
];

const CATEGORIES = [
  { name:"Birthday Gifts", icon:"🎂", img:birthdayGifts, count:42 },
  { name:"Couple Gifts", icon:"💑", img:coupleGift, count:38 },
  { name:"Gift Hampers", icon:"🎁", img:giftHamper, count:29 },
  { name:"Embroidery Gifts", icon:"✨", img:embroideryGift, count:35 },
];

const TESTIMONIALS = [
  { name:"Priya Sharma", loc:"Mumbai", text:"I ordered a custom frame for our anniversary and it was absolutely breathtaking. The quality exceeded all my expectations. Will definitely order again!", rating:5, img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { name:"Arjun Mehta", loc:"Bangalore", text:"The gift hamper I ordered for my mom's birthday arrived beautifully packed. She was moved to tears. Creative Cart truly crafts love!", rating:5, img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { name:"Sneha Kapoor", loc:"Delhi", text:"Stunning star map for our wedding anniversary. The packaging was luxurious, the engraving was perfect. A truly unforgettable gift!", rating:5, img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
  { name:"Rahul Verma", loc:"Pune", text:"Best personalized gifts platform in India. The attention to detail is remarkable. My wife absolutely loved the custom memory book.", rating:5, img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
];

const GALLERY_IMGS = [
  product1,
  product2,
  product3,
  product4,
  product5,
];

// ─── ICONS ────────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 18, style = {} }) => {
  const icons = {
    cart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
    heart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    search: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    menu: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    close: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    arrow: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>,
    arrowLeft: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>,
    star: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
    plus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    minus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    trash: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><polyline points="3,6 5,6 21,6"/><path d="M19,6v14a2 2 0 01-2,2H7a2 2 0 01-2-2V6m3,0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>,
    eye: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={style}><polyline points="20,6 9,17 4,12"/></svg>,
    truck: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><rect x="1" y="3" width="15" height="13"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    gift: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><polyline points="20,12 20,22 4,22 4,12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>,
    instagram: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    phone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    mail: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    mapPin: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    chevron: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><polyline points="6,9 12,15 18,9"/></svg>,
    filter: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="18" x2="12" y2="18"/></svg>,
    zoom: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  };
  return icons[name] || null;
};

// ─── TOAST ────────────────────────────────────────────────────────────────────
const Toast = ({ msg, onDone }) => {
  useEffect(() => { const t = setTimeout(onDone, 2800); return () => clearTimeout(t); }, []);
  return (
    <div className="toast">
      <span style={{color:"#4ade80"}}>✓</span>
      {msg}
    </div>
  );
};

// ─── STARS ────────────────────────────────────────────────────────────────────
const Stars = ({ rating }) => (
  <div className="card-stars" style={{display:"flex",gap:"2px"}}>
    {[1,2,3,4,5].map(i => (
      <Icon key={i} name="star" size={12} style={{color: i<=Math.round(rating) ? "var(--gold)" : "var(--soft-gray)"}} />
    ))}
  </div>
);

// ─── NAV ──────────────────────────────────────────────────────────────────────
const Nav = ({ page, setPage, cartCount, wishCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 90,
    transition: "all 0.4s ease",
    padding: scrolled ? "10px 0" : "18px 0",
    background: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    boxShadow: scrolled ? "0 2px 30px rgba(44,36,32,0.08)" : "none",
  };

  const links = ["Home","Shop","About","Contact"];

  return (
    <>
      <nav style={navStyle}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          {/* Logo */}
          <div onClick={() => setPage("home")} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"}}>
            <div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,var(--dusty-rose),var(--gold))",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Icon name="gift" size={18} style={{color:"white"}} />
            </div>
            <div>
              <div style={{fontFamily:"'Great Vibes',cursive",fontSize:"22px",color:"var(--charcoal)",lineHeight:1}}>Creative Cart</div>
              <div style={{fontSize:"8px",letterSpacing:"3px",color:"var(--gold)",textTransform:"uppercase",fontWeight:600}}>Handmade with Love</div>
            </div>
          </div>

          {/* Desktop links */}
          <div style={{display:"flex",gap:"32px",alignItems:"center"}} className="desktop-links">
            {links.map(l => (
              <button key={l} onClick={() => setPage(l.toLowerCase())} style={{
                background:"none",border:"none",cursor:"pointer",
                fontFamily:"'DM Sans',sans-serif",fontSize:"14px",fontWeight:500,
                color: page === l.toLowerCase() ? "var(--dusty-rose)" : "var(--charcoal)",
                transition:"color 0.3s",padding:"4px 0",
                borderBottom: page===l.toLowerCase() ? "1.5px solid var(--dusty-rose)" : "1.5px solid transparent"
              }}>{l}</button>
            ))}
          </div>

          {/* Icons */}
          <div style={{display:"flex",alignItems:"center",gap:"4px"}}>
            <button onClick={() => setSearchOpen(!searchOpen)} style={{background:"none",border:"none",cursor:"pointer",padding:"8px",borderRadius:"50%",color:"var(--charcoal)",transition:"var(--transition)"}}>
              <Icon name="search" size={20} />
            </button>
            <button onClick={() => setPage("wishlist")} style={{background:"none",border:"none",cursor:"pointer",padding:"8px",borderRadius:"50%",color:"var(--charcoal)",position:"relative"}}>
              <Icon name="heart" size={20} />
              {wishCount > 0 && <span style={{position:"absolute",top:"4px",right:"4px",width:"16px",height:"16px",background:"var(--dusty-rose)",color:"white",borderRadius:"50%",fontSize:"10px",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>{wishCount}</span>}
            </button>
            <button onClick={() => setPage("cart")} style={{background:"none",border:"none",cursor:"pointer",padding:"8px",borderRadius:"50%",color:"var(--charcoal)",position:"relative"}}>
              <Icon name="cart" size={20} />
              {cartCount > 0 && <span style={{position:"absolute",top:"4px",right:"4px",width:"16px",height:"16px",background:"var(--dusty-rose)",color:"white",borderRadius:"50%",fontSize:"10px",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>{cartCount}</span>}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{background:"none",border:"none",cursor:"pointer",padding:"8px",borderRadius:"50%",color:"var(--charcoal)",display:"none"}} className="menu-btn">
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div style={{maxWidth:1280,margin:"12px auto 0",padding:"0 24px",animation:"fadeUp 0.3s ease"}}>
            <div style={{background:"white",borderRadius:50,padding:"10px 20px",display:"flex",alignItems:"center",gap:"12px",boxShadow:"var(--shadow-medium)"}}>
              <Icon name="search" size={18} style={{color:"var(--warm-gray)"}} />
              <input value={searchQ} onChange={e=>setSearchQ(e.target.value)}
                placeholder="Search for gifts, hampers, custom frames..."
                style={{border:"none",outline:"none",flex:1,fontSize:"14px",color:"var(--charcoal)",background:"transparent"}}
                autoFocus
              />
              <button onClick={() => { setSearchOpen(false); setSearchQ(""); }} style={{background:"none",border:"none",cursor:"pointer",color:"var(--warm-gray)"}}>
                <Icon name="close" size={18} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)} />
          <div style={{position:"fixed",top:0,right:0,width:280,height:"100vh",background:"var(--ivory)",zIndex:200,padding:"80px 32px 32px",animation:"slideLeft 0.4s ease",boxShadow:"var(--shadow-strong)"}}>
            <button onClick={() => setMenuOpen(false)} style={{position:"absolute",top:20,right:20,background:"none",border:"none",cursor:"pointer"}}>
              <Icon name="close" size={24} />
            </button>
            <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
              {links.map(l => (
                <button key={l} onClick={() => { setPage(l.toLowerCase()); setMenuOpen(false); }} style={{
                  background:"none",border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",
                  fontSize:"24px",fontWeight:600,color:"var(--charcoal)",textAlign:"left",
                  borderBottom:"1px solid var(--soft-gray)",paddingBottom:"12px"
                }}>{l}</button>
              ))}
            </div>
          </div>
        </>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

// ─── PRODUCT CARD COMPONENT ───────────────────────────────────────────────────
const ProductCard = ({ product, onAddCart, onWishlist, onView, wishlisted }) => (
  <div className="product-card" onClick={() => onView(product)}>
    {product.badge && <span className={`badge badge-${product.badge}`}>{product.badge}</span>}
    <div className="card-img-wrap">
      <img src={product.img} alt={product.name} className="card-img" loading="lazy" />
      <div className="card-actions" onClick={e => e.stopPropagation()}>
        <button className="card-action-btn" onClick={() => onAddCart(product)}>
          <Icon name="cart" size={13} /> Add
        </button>
        <button className="card-action-btn wish" onClick={() => onWishlist(product)} style={wishlisted ? {background:"var(--dusty-rose)",color:"white"} : {}}>
          <Icon name="heart" size={13} />
        </button>
        <button className="card-action-btn" onClick={() => onView(product)}>
          <Icon name="eye" size={13} />
        </button>
      </div>
    </div>
    <div className="card-body">
      <div className="card-cat">{product.cat}</div>
      <Stars rating={product.rating} />
      <div className="card-name">{product.name}</div>
      <div className="card-price">
        <span className="price-new">₹{product.price.toLocaleString()}</span>
        {product.old && <span className="price-old">₹{product.old.toLocaleString()}</span>}
        {product.old && <span className="price-badge">{Math.round((1 - product.price/product.old)*100)}% off</span>}
      </div>
    </div>
  </div>
);

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ setPage, onAddCart, onWishlist, wishlistIds, onView }) => {
  const [tIdx, setTIdx] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
    const t = setInterval(() => setTIdx(i => (i+1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight:"100vh", position:"relative", overflow:"hidden",
        display:"flex", alignItems:"center",
        background:"linear-gradient(135deg, #faf3ee 0%, #f5ede0 40%, #ede0d4 100%)"
      }}>
        {/* Decorative blobs */}
        <div style={{position:"absolute",top:"-10%",right:"-5%",width:"55%",height:"110%",borderRadius:"40% 60% 60% 40%/60% 40% 60% 40%",background:"linear-gradient(135deg,rgba(232,196,184,0.4),rgba(201,169,110,0.2))",zIndex:0}} />
        <div style={{position:"absolute",bottom:"-20%",left:"-10%",width:"40%",height:"70%",borderRadius:"60% 40% 40% 60%/40% 60% 40% 60%",background:"rgba(200,184,212,0.2)",zIndex:0}} />

        <div style={{maxWidth:1280,margin:"0 auto",padding:"120px 24px 80px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center",width:"100%",zIndex:1,position:"relative"}}>
          <div style={{opacity:heroLoaded?1:0,transform:heroLoaded?"none":"translateY(40px)",transition:"all 1s cubic-bezier(0.25,0.46,0.45,0.94)"}}>
            <span className="section-label">✦ Crafted with Heart</span>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(3rem,6vw,5.5rem)",fontWeight:600,lineHeight:1.1,color:"var(--charcoal)",marginBottom:"24px"}}>
              Handmade Gifts
              <br /><span className="gold-text">Crafted with Love</span>
            </h1>
            <p style={{fontSize:"16px",color:"var(--warm-gray)",lineHeight:1.8,marginBottom:"36px",maxWidth:"480px"}}>
              Every gift tells a story. Discover our curated collection of handcrafted, personalized gifts that make every moment unforgettable.
            </p>
            <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
              <button className="btn-primary" onClick={() => setPage("shop")}>
                <Icon name="gift" size={16} /> Shop Now
              </button>
              <button className="btn-secondary" onClick={() => setPage("shop")}>
                Explore Gifts <Icon name="arrow" size={16} />
              </button>
            </div>
            {/* Stats */}
            <div style={{display:"flex",gap:"40px",marginTop:"48px"}}>
              {[["10K+","Happy Customers"],["500+","Gift Designs"],["4.9★","Avg Rating"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"28px",fontWeight:700,color:"var(--charcoal)"}}>{n}</div>
                  <div style={{fontSize:"12px",color:"var(--warm-gray)",letterSpacing:"0.5px"}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image collage */}
          <div style={{position:"relative",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{position:"absolute",top:"5%",left:"5%",width:"55%",aspectRatio:"1",borderRadius:"30% 70% 70% 30%/30% 30% 70% 70%",overflow:"hidden",boxShadow:"var(--shadow-strong)",zIndex:2,animation:"float 4s ease-in-out infinite"}}>
              <img src={gift1} alt="gift" style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
            <div style={{position:"absolute",bottom:"5%",right:"5%",width:"48%",aspectRatio:"1",borderRadius:"60% 40% 40% 60%",overflow:"hidden",boxShadow:"var(--shadow-strong)",zIndex:3,animation:"float 4s ease-in-out infinite 1s"}}>
              <img src={gift2} alt="hamper" style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
            {/* Gold badge */}
            <div style={{position:"absolute",top:"30%",right:"2%",zIndex:4,animation:"float 3s ease-in-out infinite 0.5s"}}>
              <div style={{background:"var(--gold)",color:"white",borderRadius:"50%",width:80,height:80,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(201,169,110,0.4)"}}>
                <div style={{fontSize:"18px",fontWeight:700}}>100%</div>
                <div style={{fontSize:"8px",letterSpacing:"1px",textAlign:"center"}}>HANDMADE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{position:"absolute",bottom:"32px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",opacity:0.6}}>
          <span style={{fontSize:"11px",letterSpacing:"2px",color:"var(--warm-gray)"}}>SCROLL</span>
          <div style={{width:"1px",height:"40px",background:"linear-gradient(to bottom, var(--gold), transparent)"}} />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div style={{background:"var(--charcoal)",padding:"14px 0",overflow:"hidden"}}>
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{display:"flex",gap:"48px",paddingRight:"48px",whiteSpace:"nowrap"}}>
              {["✦ Free Delivery Over ₹999","✦ 100% Handcrafted","✦ Custom Personalization","✦ Secure Packaging","✦ Easy Returns","✦ Gift Wrapping Available"].map(t => (
                <span key={t} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"13px",letterSpacing:"2px",color:"var(--gold-light)",textTransform:"uppercase",fontWeight:500}}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <section style={{padding:"80px 24px",maxWidth:1280,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"48px"}}>
          <span className="section-label">Browse by Occasion</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-sub" style={{margin:"0 auto"}}>Find the perfect gift for every celebration and milestone.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"20px"}}>
          {CATEGORIES.map((cat,i) => (
            <div key={cat.name} onClick={() => setPage("shop")} style={{
              cursor:"pointer",borderRadius:"var(--radius-md)",overflow:"hidden",
              position:"relative",height:260,boxShadow:"var(--shadow-soft)",
              transition:"var(--transition)",animationDelay:`${i*0.1}s`
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-strong)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "var(--shadow-soft)"; }}>
              <img src={cat.img} alt={cat.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s ease"}}
                onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
                onMouseLeave={e => e.target.style.transform = "none"} />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(44,36,32,0.75) 0%, rgba(44,36,32,0.1) 60%)"}} />
              <div style={{position:"absolute",bottom:20,left:20,right:20}}>
                <div style={{fontSize:"24px",marginBottom:"4px"}}>{cat.icon}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"20px",fontWeight:600,color:"white"}}>{cat.name}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.7)",marginTop:"2px"}}>{cat.count} products</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{padding:"60px 24px 80px",background:"var(--cream)"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"40px",flexWrap:"wrap",gap:"16px"}}>
            <div>
              <span className="section-label">Trending Now</span>
              <h2 className="section-title" style={{marginBottom:0}}>Bestselling Gifts</h2>
            </div>
            <button className="btn-secondary" onClick={() => setPage("shop")}>View All <Icon name="arrow" size={16} /></button>
          </div>
          <div className="products-grid">
            {PRODUCTS.slice(0,4).map(p => (
              <ProductCard key={p.id} product={p} onAddCart={onAddCart} onWishlist={onWishlist} onView={onView} wishlisted={wishlistIds.includes(p.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US BANNER ── */}
      <section style={{padding:"80px 24px",maxWidth:1280,margin:"0 auto"}}>
        <div style={{background:"linear-gradient(135deg,var(--charcoal) 0%,#3d2f2a 100%)",borderRadius:"var(--radius-xl)",padding:"60px 48px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center",overflow:"hidden",position:"relative"}}>
          <div style={{position:"absolute",top:"-20%",right:"-5%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(201,169,110,0.08)"}} />
          <div>
            <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"11px",fontWeight:600,letterSpacing:"3px",textTransform:"uppercase",color:"var(--gold)",marginBottom:"12px",display:"block"}}>Our Promise</span>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",fontWeight:600,color:"white",lineHeight:1.2,marginBottom:"20px"}}>Why Choose Creative Cart?</h2>
            <p style={{color:"rgba(255,255,255,0.65)",fontSize:"15px",lineHeight:1.8,marginBottom:"32px"}}>
              We pour heart into every creation. From concept to delivery, each gift is made with premium materials and genuine craftsmanship.
            </p>
            <button className="btn-gold" onClick={() => setPage("about")}>Our Story <Icon name="arrow" size={16} /></button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
            {[
              {icon:"🎨","t":"100% Handmade","d":"Every piece crafted by skilled artisans"},
              {icon:"✍️","t":"Personalized","d":"Custom names, dates & messages"},
              {icon:"📦","t":"Gift Wrapped","d":"Luxury packaging at no extra cost"},
              {icon:"🚚","t":"Fast Delivery","d":"Delivered within 3–5 business days"},
            ].map(item => (
              <div key={item.t} style={{background:"rgba(255,255,255,0.06)",borderRadius:"var(--radius-sm)",padding:"20px",border:"1px solid rgba(255,255,255,0.1)"}}>
                <div style={{fontSize:"28px",marginBottom:"10px"}}>{item.icon}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"16px",fontWeight:600,color:"white",marginBottom:"4px"}}>{item.t}</div>
                <div style={{fontSize:"12px",color:"rgba(255,255,255,0.5)",lineHeight:1.5}}>{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{padding:"60px 24px 80px",background:"var(--cream)",overflow:"hidden"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:"48px"}}>
            <span className="section-label">Happy Customers</span>
            <h2 className="section-title">What They Say</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"24px"}}>
            {TESTIMONIALS.map((t,i) => (
              <div key={i} style={{
                background:"white",borderRadius:"var(--radius-md)",padding:"28px",
                boxShadow:"var(--shadow-soft)",position:"relative",
                border:"1px solid rgba(232,196,184,0.3)",
                transform: i === tIdx ? "scale(1.02)" : "scale(1)",
                transition:"transform 0.5s ease",
                borderTop: i === tIdx ? "3px solid var(--gold)" : "3px solid transparent"
              }}>
                <div style={{position:"absolute",top:20,right:24,fontFamily:"'Cormorant Garamond',serif",fontSize:"60px",color:"var(--cream)",lineHeight:1}}>"</div>
                <div style={{display:"flex",gap:"3px",marginBottom:"16px"}}>
                  {[1,2,3,4,5].map(s => <Icon key={s} name="star" size={14} style={{color:"var(--gold)"}} />)}
                </div>
                <p style={{fontSize:"14px",color:"var(--warm-gray)",lineHeight:1.8,marginBottom:"20px",fontStyle:"italic"}}>"{t.text}"</p>
                <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                  <img src={t.img} alt={t.name} style={{width:44,height:44,borderRadius:"50%",objectFit:"cover",border:"2px solid var(--gold-light)"}} />
                  <div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"16px",fontWeight:600,color:"var(--charcoal)"}}>{t.name}</div>
                    <div style={{fontSize:"12px",color:"var(--warm-gray)"}}>{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div style={{display:"flex",justifyContent:"center",gap:"8px",marginTop:"32px"}}>
            {TESTIMONIALS.map((_,i) => (
              <button key={i} onClick={() => setTIdx(i)} style={{width:i===tIdx?24:8,height:8,borderRadius:4,background:i===tIdx?"var(--gold)":"var(--soft-gray)",border:"none",cursor:"pointer",transition:"all 0.3s ease"}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{padding:"80px 24px",maxWidth:1280,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"40px",flexWrap:"wrap",gap:"16px"}}>
          <div>
            <span className="section-label"><Icon name="instagram" size={12} style={{display:"inline",marginRight:"6px"}} />@creativecart</span>
            <h2 className="section-title" style={{marginBottom:0}}>Gift Gallery</h2>
          </div>
          <a href="#" style={{textDecoration:"none",color:"var(--dusty-rose)",fontSize:"14px",fontWeight:500,display:"flex",alignItems:"center",gap:"6px"}}>
            Follow Us <Icon name="arrow" size={16} />
          </a>
        </div>
        <div className="gallery-grid">
          {GALLERY_IMGS.map((img,i) => (
            <div key={i} className="gallery-item" style={{
              borderRadius:"var(--radius-md)",overflow:"hidden",
              aspectRatio: i===0 ? "1" : "4/3",
              boxShadow:"var(--shadow-soft)",
              cursor:"pointer",position:"relative"
            }}
            onMouseEnter={e => { e.currentTarget.querySelector("img").style.transform = "scale(1.08)"; e.currentTarget.querySelector(".gal-overlay").style.opacity = "1"; }}
            onMouseLeave={e => { e.currentTarget.querySelector("img").style.transform = "scale(1)"; e.currentTarget.querySelector(".gal-overlay").style.opacity = "0"; }}>
              <img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s ease",display:"block"}} />
              <div className="gal-overlay" style={{position:"absolute",inset:0,background:"rgba(44,36,32,0.35)",opacity:0,transition:"opacity 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Icon name="instagram" size={28} style={{color:"white"}} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{padding:"80px 24px",background:"linear-gradient(135deg,#f5ede0,#faf7f2)"}}>
        <div style={{maxWidth:600,margin:"0 auto",textAlign:"center"}}>
          <span className="section-label">Stay Connected</span>
          <h2 className="section-title">Get Gift Inspiration</h2>
          <p className="section-sub" style={{margin:"0 auto 32px"}}>Subscribe for exclusive offers, new arrivals, and gift ideas straight to your inbox.</p>
          <div style={{display:"flex",gap:"12px",maxWidth:"440px",margin:"0 auto",flexWrap:"wrap"}}>
            <input placeholder="Your email address" style={{
              flex:1,minWidth:"200px",padding:"14px 20px",border:"1.5px solid var(--soft-gray)",
              borderRadius:"50px",outline:"none",background:"white",
              fontSize:"14px",color:"var(--charcoal)"
            }} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── SHOP PAGE ────────────────────────────────────────────────────────────────
const ShopPage = ({ onAddCart, onWishlist, wishlistIds, onView }) => {
  const [filterCat, setFilterCat] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const cats = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.cat)))];
  const filtered = PRODUCTS
    .filter(p => filterCat === "All" || p.cat === filterCat)
    .filter(p => p.price <= maxPrice)
    .sort((a,b) => sortBy === "price-asc" ? a.price-b.price : sortBy === "price-desc" ? b.price-a.price : b.rating-a.rating);

  const Sidebar = () => (
    <div style={{background:"white",borderRadius:"var(--radius-md)",padding:"28px",boxShadow:"var(--shadow-soft)",position:"sticky",top:"90px"}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"20px",fontWeight:600,marginBottom:"24px",color:"var(--charcoal)"}}>Filters</h3>

      <div style={{marginBottom:"24px"}}>
        <div style={{fontSize:"12px",fontWeight:600,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",marginBottom:"12px"}}>Category</div>
        {cats.map(c => (
          <button key={c} onClick={() => setFilterCat(c)} style={{
            display:"block",width:"100%",textAlign:"left",padding:"8px 12px",marginBottom:"4px",
            border:"none",borderRadius:"var(--radius-sm)",cursor:"pointer",
            background:filterCat===c?"var(--blush)":"transparent",
            color:filterCat===c?"var(--dusty-rose)":"var(--warm-gray)",
            fontFamily:"'DM Sans',sans-serif",fontSize:"14px",fontWeight:filterCat===c?600:400,
            transition:"var(--transition)"
          }}>{c}</button>
        ))}
      </div>

      <div style={{marginBottom:"24px"}}>
        <div style={{fontSize:"12px",fontWeight:600,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",marginBottom:"12px"}}>Max Price</div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}>
          <span style={{fontSize:"12px",color:"var(--warm-gray)"}}>₹0</span>
          <span style={{fontSize:"14px",fontWeight:600,color:"var(--dusty-rose)"}}>₹{maxPrice.toLocaleString()}</span>
        </div>
        <input type="range" min={500} max={3500} step={100} value={maxPrice} onChange={e=>setMaxPrice(+e.target.value)} />
      </div>

      <div>
        <div style={{fontSize:"12px",fontWeight:600,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",marginBottom:"12px"}}>Occasion</div>
        {["Birthday","Anniversary","Wedding","Baby Shower","Diwali"].map(o => (
          <label key={o} style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",cursor:"pointer",fontSize:"14px",color:"var(--warm-gray)"}}>
            <input type="checkbox" style={{accentColor:"var(--gold)"}} /> {o}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{paddingTop:"80px",minHeight:"100vh"}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,var(--cream),var(--ivory))",padding:"48px 24px 32px"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <span className="section-label">Our Collection</span>
          <h1 className="section-title">All Gifts</h1>
          <p style={{color:"var(--warm-gray)",fontSize:"15px"}}>{filtered.length} handpicked gifts for you</p>
        </div>
      </div>

      <div style={{maxWidth:1280,margin:"0 auto",padding:"32px 24px"}}>
        <div style={{display:"grid",gridTemplateColumns:"240px 1fr",gap:"32px",alignItems:"start"}}>
          {/* Sidebar desktop */}
          <div className="sidebar-desktop"><Sidebar /></div>

          {/* Products */}
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px",flexWrap:"wrap",gap:"12px"}}>
              <span style={{fontSize:"14px",color:"var(--warm-gray)"}}>{filtered.length} products found</span>
              <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
                <button onClick={() => setSidebarOpen(true)} style={{display:"none",alignItems:"center",gap:"6px",padding:"8px 16px",border:"1.5px solid var(--soft-gray)",borderRadius:"50px",background:"white",cursor:"pointer",fontSize:"13px"}} className="filter-mobile-btn">
                  <Icon name="filter" size={15} /> Filters
                </button>
                <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{padding:"9px 16px",border:"1.5px solid var(--soft-gray)",borderRadius:"50px",background:"white",cursor:"pointer",fontSize:"13px",outline:"none",color:"var(--charcoal)"}}>
                  <option value="popular">Sort: Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="products-grid">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} onAddCart={onAddCart} onWishlist={onWishlist} onView={onView} wishlisted={wishlistIds.includes(p.id)} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div style={{textAlign:"center",padding:"80px 0",color:"var(--warm-gray)"}}>
                <div style={{fontSize:"48px",marginBottom:"16px"}}>🎁</div>
                <p>No gifts found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <>
          <div className="overlay" onClick={() => setSidebarOpen(false)} />
          <div style={{position:"fixed",top:0,left:0,width:300,height:"100vh",background:"white",zIndex:200,padding:"32px 24px",overflowY:"auto",animation:"fadeIn 0.3s ease"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"24px"}}>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"22px",fontWeight:600}}>Filters</h3>
              <button onClick={() => setSidebarOpen(false)} style={{background:"none",border:"none",cursor:"pointer"}}><Icon name="close" size={22} /></button>
            </div>
            <Sidebar />
          </div>
        </>
      )}

      <style>{`
        @media (max-width: 768px) {
          .sidebar-desktop { display: none; }
          .filter-mobile-btn { display: flex !important; }
        }
      `}</style>
    </div>
  );
};

// ─── PRODUCT DETAIL PAGE ──────────────────────────────────────────────────────
const ProductDetailPage = ({ product, onAddCart, onBack }) => {
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);
  const [customName, setCustomName] = useState("");
  const [customMsg, setCustomMsg] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("Standard");

  const imgs = [product.img, ...PRODUCTS.filter(p=>p.id!==product.id).slice(0,3).map(p=>p.img)];
  const variants = ["Standard","Premium","Deluxe"];

  const fieldStyle = {
    width:"100%",padding:"12px 16px",border:"1.5px solid var(--soft-gray)",
    borderRadius:"var(--radius-sm)",outline:"none",fontSize:"14px",color:"var(--charcoal)",
    background:"white",fontFamily:"'DM Sans',sans-serif",transition:"border-color 0.3s"
  };

  return (
    <div style={{paddingTop:"80px",minHeight:"100vh"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"32px 24px"}}>
        <button onClick={onBack} style={{display:"flex",alignItems:"center",gap:"8px",background:"none",border:"none",cursor:"pointer",color:"var(--warm-gray)",fontSize:"14px",marginBottom:"32px",transition:"color 0.3s"}}
          onMouseEnter={e=>e.target.style.color="var(--dusty-rose)"} onMouseLeave={e=>e.target.style.color="var(--warm-gray)"}>
          <Icon name="arrowLeft" size={16} /> Back to Shop
        </button>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"start"}}>
          {/* Images */}
          <div>
            <div style={{borderRadius:"var(--radius-lg)",overflow:"hidden",marginBottom:"16px",aspectRatio:"1",background:"var(--cream)",position:"relative",boxShadow:"var(--shadow-medium)"}}>
              <img src={imgs[imgIdx]} alt={product.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"all 0.5s ease"}} />
              <button style={{position:"absolute",bottom:16,right:16,background:"white",border:"none",borderRadius:"50px",padding:"8px 14px",cursor:"pointer",fontSize:"12px",display:"flex",alignItems:"center",gap:"6px",boxShadow:"var(--shadow-soft)"}}>
                <Icon name="zoom" size={14} /> Zoom
              </button>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
              {imgs.map((img,i) => (
                <button key={i} onClick={() => setImgIdx(i)} style={{
                  width:"70px",height:"70px",borderRadius:"var(--radius-sm)",overflow:"hidden",
                  border:`2px solid ${i===imgIdx?"var(--gold)":"transparent"}`,
                  padding:0,cursor:"pointer",transition:"all 0.3s ease",flexShrink:0
                }}>
                  <img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span style={{fontSize:"11px",fontWeight:600,letterSpacing:"2px",textTransform:"uppercase",color:"var(--gold)"}}>{product.cat}</span>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,3vw,2.8rem)",fontWeight:600,color:"var(--charcoal)",margin:"8px 0 12px",lineHeight:1.2}}>{product.name}</h1>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"}}>
              <div style={{display:"flex",gap:"3px"}}>
                {[1,2,3,4,5].map(s => <Icon key={s} name="star" size={15} style={{color:"var(--gold)"}} />)}
              </div>
              <span style={{fontSize:"13px",color:"var(--warm-gray)"}}>{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"24px"}}>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"32px",fontWeight:700,color:"var(--dusty-rose)"}}>₹{product.price.toLocaleString()}</span>
              {product.old && <span style={{fontSize:"18px",color:"var(--soft-gray)",textDecoration:"line-through"}}>₹{product.old.toLocaleString()}</span>}
              {product.old && <span style={{background:"var(--blush)",color:"var(--dusty-rose)",padding:"4px 12px",borderRadius:"50px",fontSize:"12px",fontWeight:600}}>{Math.round((1-product.price/product.old)*100)}% OFF</span>}
            </div>
            <p style={{fontSize:"14px",color:"var(--warm-gray)",lineHeight:1.8,marginBottom:"28px"}}>{product.desc}</p>

            {/* Variant */}
            <div style={{marginBottom:"20px"}}>
              <div style={{fontSize:"13px",fontWeight:600,color:"var(--charcoal)",marginBottom:"10px"}}>Select Variant</div>
              <div style={{display:"flex",gap:"10px"}}>
                {variants.map(v => (
                  <button key={v} onClick={() => setSelectedVariant(v)} style={{
                    padding:"8px 18px",borderRadius:"50px",cursor:"pointer",
                    background:selectedVariant===v?"var(--charcoal)":"white",
                    color:selectedVariant===v?"white":"var(--charcoal)",
                    border:`1.5px solid ${selectedVariant===v?"var(--charcoal)":"var(--soft-gray)"}`,
                    fontFamily:"'DM Sans',sans-serif",fontSize:"13px",transition:"all 0.3s"
                  }}>{v}</button>
                ))}
              </div>
            </div>

            {/* Customization */}
            <div style={{background:"var(--cream)",borderRadius:"var(--radius-md)",padding:"20px",marginBottom:"24px"}}>
              <div style={{fontSize:"13px",fontWeight:600,color:"var(--charcoal)",marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"}}>
                ✍️ Personalize Your Gift
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
                <input value={customName} onChange={e=>setCustomName(e.target.value)} placeholder="Add a name (e.g., Priya & Arjun)" style={fieldStyle}
                  onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} />
                <textarea value={customMsg} onChange={e=>setCustomMsg(e.target.value)} placeholder="Add a special message..." rows={3} style={{...fieldStyle,resize:"vertical"}}
                  onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} />
              </div>
            </div>

            {/* Qty + Add to Cart */}
            <div style={{display:"flex",gap:"16px",alignItems:"center",marginBottom:"16px",flexWrap:"wrap"}}>
              <div style={{display:"flex",alignItems:"center",border:"1.5px solid var(--soft-gray)",borderRadius:"50px",overflow:"hidden"}}>
                <button onClick={() => setQty(q=>Math.max(1,q-1))} style={{width:44,height:48,border:"none",background:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--charcoal)"}}>
                  <Icon name="minus" size={16} />
                </button>
                <span style={{width:40,textAlign:"center",fontSize:"15px",fontWeight:600,color:"var(--charcoal)"}}>{qty}</span>
                <button onClick={() => setQty(q=>q+1)} style={{width:44,height:48,border:"none",background:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--charcoal)"}}>
                  <Icon name="plus" size={16} />
                </button>
              </div>
              <button className="btn-primary" style={{flex:1,justifyContent:"center"}} onClick={() => onAddCart(product, qty)}>
                <Icon name="cart" size={16} /> Add to Cart
              </button>
            </div>

            {/* Trust badges */}
            <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
              {[["🚚","Free Delivery"],["🎁","Gift Wrapped"],["↩️","Easy Return"],["🔒","Secure Pay"]].map(([ico,txt]) => (
                <div key={txt} style={{display:"flex",alignItems:"center",gap:"6px",fontSize:"12px",color:"var(--warm-gray)"}}>
                  <span>{ico}</span> {txt}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div style={{marginTop:"80px"}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"28px",fontWeight:600,color:"var(--charcoal)",marginBottom:"32px"}}>You May Also Love</h2>
          <div className="products-grid">
            {PRODUCTS.filter(p=>p.id!==product.id).slice(0,4).map(p => (
              <ProductCard key={p.id} product={p} onAddCart={onAddCart} onWishlist={() => {}} onView={() => {}} wishlisted={false} />
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.detail-grid{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
};

// ─── CART PAGE ────────────────────────────────────────────────────────────────
const CartPage = ({ cart, setCart, setPage }) => {
  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const delivery = subtotal > 999 ? 0 : 99;
  const total = subtotal + delivery;

  const update = (id, delta) => setCart(c => c.map(i => i.id===id ? {...i,qty:Math.max(1,i.qty+delta)} : i));
  const remove = (id) => setCart(c => c.filter(i => i.id!==id));

  if (!cart.length) return (
    <div style={{paddingTop:"80px",minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"20px",textAlign:"center",padding:"120px 24px"}}>
      <div style={{fontSize:"64px"}}>🛒</div>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"32px",fontWeight:600}}>Your cart is empty</h2>
      <p style={{color:"var(--warm-gray)"}}>Discover beautiful handmade gifts and fill your cart with love.</p>
      <button className="btn-primary" onClick={() => setPage("shop")}>Shop Now <Icon name="arrow" size={16} /></button>
    </div>
  );

  return (
    <div style={{paddingTop:"80px",minHeight:"100vh"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"40px 24px"}}>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:600,marginBottom:"32px"}}>Your Cart ({cart.length})</h1>
        <div style={{display:"grid",gridTemplateColumns:"1fr 360px",gap:"32px",alignItems:"start"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            {cart.map(item => (
              <div key={item.id} style={{background:"white",borderRadius:"var(--radius-md)",padding:"20px",display:"flex",gap:"20px",alignItems:"center",boxShadow:"var(--shadow-soft)"}}>
                <img src={item.img} alt={item.name} style={{width:90,height:90,objectFit:"cover",borderRadius:"var(--radius-sm)",flexShrink:0}} />
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",marginBottom:"4px"}}>{item.cat}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"18px",fontWeight:600,color:"var(--charcoal)",marginBottom:"8px"}}>{item.name}</div>
                  <div style={{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"}}>
                    <div style={{display:"flex",alignItems:"center",border:"1px solid var(--soft-gray)",borderRadius:"50px",overflow:"hidden"}}>
                      <button onClick={() => update(item.id,-1)} style={{width:32,height:32,border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Icon name="minus" size={14} />
                      </button>
                      <span style={{width:28,textAlign:"center",fontSize:"14px",fontWeight:600}}>{item.qty}</span>
                      <button onClick={() => update(item.id,1)} style={{width:32,height:32,border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Icon name="plus" size={14} />
                      </button>
                    </div>
                    <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"20px",fontWeight:700,color:"var(--dusty-rose)"}}>₹{(item.price*item.qty).toLocaleString()}</span>
                  </div>
                </div>
                <button onClick={() => remove(item.id)} style={{background:"none",border:"none",cursor:"pointer",color:"var(--soft-gray)",transition:"color 0.3s",padding:"8px"}}
                  onMouseEnter={e=>e.currentTarget.style.color="var(--dusty-rose)"} onMouseLeave={e=>e.currentTarget.style.color="var(--soft-gray)"}>
                  <Icon name="trash" size={18} />
                </button>
              </div>
            ))}
          </div>

          <div style={{background:"white",borderRadius:"var(--radius-md)",padding:"28px",boxShadow:"var(--shadow-soft)",position:"sticky",top:"90px"}}>
            <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"22px",fontWeight:600,marginBottom:"24px"}}>Order Summary</h3>
            {[["Subtotal",subtotal],["Delivery",delivery],["Gift Wrap","FREE"]].map(([l,v]) => (
              <div key={l} style={{display:"flex",justifyContent:"space-between",marginBottom:"14px",fontSize:"14px"}}>
                <span style={{color:"var(--warm-gray)"}}>{l}</span>
                <span style={{fontWeight:500,color:"var(--charcoal)"}}>{typeof v === "number" ? (v===0?"FREE":`₹${v}`) : v}</span>
              </div>
            ))}
            <div style={{height:"1px",background:"var(--soft-gray)",margin:"16px 0"}} />
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"24px"}}>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"18px",fontWeight:600}}>Total</span>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"22px",fontWeight:700,color:"var(--dusty-rose)"}}>₹{total.toLocaleString()}</span>
            </div>
            {delivery > 0 && <div style={{background:"var(--cream)",borderRadius:"var(--radius-sm)",padding:"10px 14px",fontSize:"12px",color:"var(--warm-gray)",marginBottom:"16px"}}>
              🚚 Add ₹{(999-subtotal).toLocaleString()} more for free delivery!
            </div>}
            <button className="btn-primary" style={{width:"100%",justifyContent:"center",padding:"16px"}} onClick={() => setPage("checkout")}>
              Proceed to Checkout <Icon name="arrow" size={16} />
            </button>
            <button className="btn-secondary" style={{width:"100%",justifyContent:"center",marginTop:"12px"}} onClick={() => setPage("shop")}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── CHECKOUT PAGE ────────────────────────────────────────────────────────────
const CheckoutPage = ({ cart, setPage }) => {
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState("upi");
  const steps = ["Address","Payment","Review"];

  const total = cart.reduce((s,i) => s+i.price*i.qty, 0);

  const inputStyle = {
    width:"100%",padding:"12px 16px",border:"1.5px solid var(--soft-gray)",
    borderRadius:"var(--radius-sm)",outline:"none",fontSize:"14px",color:"var(--charcoal)",
    background:"white",fontFamily:"'DM Sans',sans-serif",transition:"border-color 0.3s"
  };
  const labelStyle = { fontSize:"13px",fontWeight:500,color:"var(--charcoal)",marginBottom:"6px",display:"block" };

  return (
    <div style={{paddingTop:"80px",minHeight:"100vh",background:"var(--cream)"}}>
      <div style={{maxWidth:960,margin:"0 auto",padding:"40px 24px"}}>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:600,marginBottom:"40px",textAlign:"center"}}>Checkout</h1>

        {/* Steps */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0",marginBottom:"40px",position:"relative"}}>
          {steps.map((s,i) => (
            <div key={s} style={{display:"flex",alignItems:"center"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",position:"relative"}}>
                <div style={{
                  width:40,height:40,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",
                  background:i<step?"var(--gold)":i===step?"var(--dusty-rose)":"white",
                  color:i<=step?"white":"var(--soft-gray)",
                  border:`2px solid ${i<step?"var(--gold)":i===step?"var(--dusty-rose)":"var(--soft-gray)"}`,
                  fontWeight:600,fontSize:"15px",transition:"all 0.4s"
                }}>
                  {i < step ? <Icon name="check" size={18} /> : i+1}
                </div>
                <span style={{fontSize:"12px",color:i===step?"var(--dusty-rose)":"var(--warm-gray)",fontWeight:i===step?600:400}}>{s}</span>
              </div>
              {i < steps.length-1 && <div style={{width:"80px",height:"2px",background:i<step?"var(--gold)":"var(--soft-gray)",margin:"0 4px 18px",transition:"background 0.4s"}} />}
            </div>
          ))}
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 340px",gap:"28px",alignItems:"start"}}>
          <div style={{background:"white",borderRadius:"var(--radius-md)",padding:"32px",boxShadow:"var(--shadow-soft)"}}>
            {step === 0 && (
              <div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"22px",fontWeight:600,marginBottom:"24px"}}>Delivery Address</h3>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
                  {["First Name","Last Name"].map(p => (
                    <div key={p}><label style={labelStyle}>{p}</label><input placeholder={p} style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} /></div>
                  ))}
                  <div style={{gridColumn:"span 2"}}><label style={labelStyle}>Email</label><input placeholder="Email Address" style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} /></div>
                  <div style={{gridColumn:"span 2"}}><label style={labelStyle}>Phone</label><input placeholder="Phone Number" style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} /></div>
                  <div style={{gridColumn:"span 2"}}><label style={labelStyle}>Address</label><input placeholder="Full Address" style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} /></div>
                  {["City","State","PIN Code"].map((p,i) => (
                    <div key={p} style={i===2?{}:{}}><label style={labelStyle}>{p}</label><input placeholder={p} style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} /></div>
                  ))}
                </div>
                <button className="btn-primary" style={{marginTop:"24px",width:"100%",justifyContent:"center",padding:"15px"}} onClick={()=>setStep(1)}>
                  Continue to Payment <Icon name="arrow" size={16} />
                </button>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"22px",fontWeight:600,marginBottom:"24px"}}>Payment Method</h3>
                <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
                  {[["upi","UPI / QR Code","⚡"],["card","Debit / Credit Card","💳"],["cod","Cash on Delivery","💰"]].map(([v,l,ico]) => (
                    <label key={v} style={{
                      display:"flex",alignItems:"center",gap:"16px",padding:"18px 20px",
                      borderRadius:"var(--radius-sm)",cursor:"pointer",
                      border:`2px solid ${payment===v?"var(--gold)":"var(--soft-gray)"}`,
                      background:payment===v?"rgba(201,169,110,0.05)":"white",
                      transition:"all 0.3s"
                    }}>
                      <input type="radio" name="pay" value={v} checked={payment===v} onChange={()=>setPayment(v)} style={{accentColor:"var(--gold)"}} />
                      <span style={{fontSize:"20px"}}>{ico}</span>
                      <div>
                        <div style={{fontSize:"15px",fontWeight:500,color:"var(--charcoal)"}}>{l}</div>
                        {v==="upi" && <div style={{fontSize:"12px",color:"var(--warm-gray)"}}>Google Pay, PhonePe, Paytm</div>}
                        {v==="card" && <div style={{fontSize:"12px",color:"var(--warm-gray)"}}>Visa, Mastercard, RuPay</div>}
                        {v==="cod" && <div style={{fontSize:"12px",color:"var(--warm-gray)"}}>Pay when you receive</div>}
                      </div>
                    </label>
                  ))}
                </div>
                {payment === "card" && (
                  <div style={{marginTop:"20px",display:"flex",flexDirection:"column",gap:"14px"}}>
                    <div><label style={labelStyle}>Card Number</label><input placeholder="1234 5678 9012 3456" style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} /></div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
                      <div><label style={labelStyle}>Expiry</label><input placeholder="MM / YY" style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} /></div>
                      <div><label style={labelStyle}>CVV</label><input placeholder="CVV" style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} /></div>
                    </div>
                  </div>
                )}
                <div style={{display:"flex",gap:"12px",marginTop:"24px"}}>
                  <button className="btn-secondary" style={{flex:1,justifyContent:"center"}} onClick={()=>setStep(0)}>Back</button>
                  <button className="btn-primary" style={{flex:2,justifyContent:"center",padding:"15px"}} onClick={()=>setStep(2)}>Review Order <Icon name="arrow" size={16} /></button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"22px",fontWeight:600,marginBottom:"24px"}}>Review Your Order</h3>
                <div style={{display:"flex",flexDirection:"column",gap:"14px",marginBottom:"24px"}}>
                  {cart.map(item => (
                    <div key={item.id} style={{display:"flex",gap:"16px",alignItems:"center",padding:"14px",background:"var(--cream)",borderRadius:"var(--radius-sm)"}}>
                      <img src={item.img} alt={item.name} style={{width:56,height:56,objectFit:"cover",borderRadius:"var(--radius-sm)"}} />
                      <div style={{flex:1}}>
                        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"16px",fontWeight:600}}>{item.name}</div>
                        <div style={{fontSize:"13px",color:"var(--warm-gray)"}}>Qty: {item.qty}</div>
                      </div>
                      <div style={{fontWeight:600,color:"var(--dusty-rose)"}}>₹{(item.price*item.qty).toLocaleString()}</div>
                    </div>
                  ))}
                </div>
                <div style={{height:"1px",background:"var(--soft-gray)",margin:"16px 0"}} />
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"24px"}}>
                  <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"20px",fontWeight:600}}>Grand Total</span>
                  <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"24px",fontWeight:700,color:"var(--dusty-rose)"}}>₹{(total + (total > 999 ? 0 : 99)).toLocaleString()}</span>
                </div>
                <div style={{display:"flex",gap:"12px"}}>
                  <button className="btn-secondary" style={{flex:1,justifyContent:"center"}} onClick={()=>setStep(1)}>Back</button>
                  <button className="btn-gold" style={{flex:2,justifyContent:"center",padding:"15px"}} onClick={() => setPage("home")}>
                    <Icon name="check" size={16} /> Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary sidebar */}
          <div style={{background:"white",borderRadius:"var(--radius-md)",padding:"24px",boxShadow:"var(--shadow-soft)",position:"sticky",top:"90px"}}>
            <h4 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"18px",fontWeight:600,marginBottom:"16px"}}>Order ({cart.length} items)</h4>
            {cart.map(item => (
              <div key={item.id} style={{display:"flex",gap:"10px",marginBottom:"12px",paddingBottom:"12px",borderBottom:"1px solid var(--cream)"}}>
                <img src={item.img} alt={item.name} style={{width:44,height:44,objectFit:"cover",borderRadius:8,flexShrink:0}} />
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:"13px",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{item.name}</div>
                  <div style={{fontSize:"12px",color:"var(--warm-gray)"}}>x{item.qty}</div>
                </div>
                <div style={{fontSize:"13px",fontWeight:600,color:"var(--dusty-rose)",flexShrink:0}}>₹{(item.price*item.qty).toLocaleString()}</div>
              </div>
            ))}
            <div style={{height:"1px",background:"var(--soft-gray)",margin:"12px 0"}} />
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"15px",fontWeight:600}}>
              <span>Total</span>
              <span style={{color:"var(--dusty-rose)"}}>₹{(total + (total>999?0:99)).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── WISHLIST PAGE ────────────────────────────────────────────────────────────
const WishlistPage = ({ wishlist, onAddCart, onWishlist, onView, setPage }) => {
  if (!wishlist.length) return (
    <div style={{paddingTop:"80px",minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"20px",textAlign:"center",padding:"120px 24px"}}>
      <div style={{fontSize:"64px"}}>💝</div>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"32px",fontWeight:600}}>Your wishlist is empty</h2>
      <p style={{color:"var(--warm-gray)"}}>Save gifts you love and come back to them anytime.</p>
      <button className="btn-primary" onClick={() => setPage("shop")}>Explore Gifts <Icon name="arrow" size={16} /></button>
    </div>
  );
  return (
    <div style={{paddingTop:"80px",minHeight:"100vh"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"40px 24px"}}>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:600,marginBottom:"8px"}}>My Wishlist</h1>
        <p style={{color:"var(--warm-gray)",marginBottom:"32px"}}>{wishlist.length} saved gift{wishlist.length!==1?"s":""}</p>
        <div className="products-grid">
          {wishlist.map(p => (
            <ProductCard key={p.id} product={p} onAddCart={onAddCart} onWishlist={onWishlist} onView={onView} wishlisted={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    ["How long does delivery take?","We deliver within 3–7 business days across India. Metro cities usually receive orders in 3–4 days. Express delivery is available for an additional charge."],
    ["Can I customize any product?","Yes! Almost all our products can be personalized with names, dates, photos, or custom messages. Select the 'Customize' option on the product page."],
    ["What if I receive a damaged product?","We have a hassle-free return policy. If you receive a damaged or incorrect item, contact us within 48 hours with photos and we'll resolve it immediately."],
    ["Do you offer bulk/corporate orders?","Absolutely! We specialize in corporate gifting and bulk orders. Reach out to us via WhatsApp or email for special pricing."],
    ["Can I track my order?","Yes, once your order is dispatched you'll receive a tracking link via email and SMS. You can also check order status in your account."],
  ];

  const inputStyle = {
    width:"100%",padding:"14px 18px",border:"1.5px solid var(--soft-gray)",
    borderRadius:"var(--radius-sm)",outline:"none",fontSize:"14px",color:"var(--charcoal)",
    background:"white",fontFamily:"'DM Sans',sans-serif",transition:"border-color 0.3s"
  };

  return (
    <div style={{paddingTop:"80px",minHeight:"100vh"}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#f5ede0,var(--ivory))",padding:"60px 24px 48px",textAlign:"center"}}>
        <span className="section-label">We'd Love to Hear From You</span>
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-sub" style={{margin:"0 auto"}}>Have a question or a special request? Our team is here for you, always.</p>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"60px 24px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"start"}}>
          {/* Contact form */}
          <div style={{background:"white",borderRadius:"var(--radius-md)",padding:"40px",boxShadow:"var(--shadow-soft)"}}>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"24px",fontWeight:600,marginBottom:"28px"}}>Send a Message</h2>
            <div style={{display:"flex",flexDirection:"column",gap:"18px"}}>
              {[["Your Name","text","Enter your name"],["Email Address","email","Enter your email"],["Subject","text","What's this about?"]].map(([l,t,p]) => (
                <div key={l}>
                  <label style={{fontSize:"13px",fontWeight:500,color:"var(--charcoal)",marginBottom:"6px",display:"block"}}>{l}</label>
                  <input type={t} placeholder={p} style={inputStyle} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} />
                </div>
              ))}
              <div>
                <label style={{fontSize:"13px",fontWeight:500,color:"var(--charcoal)",marginBottom:"6px",display:"block"}}>Message</label>
                <textarea placeholder="Tell us how we can help you..." rows={5} style={{...inputStyle,resize:"vertical"}} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="var(--soft-gray)"} />
              </div>
              <button className="btn-primary" style={{width:"100%",justifyContent:"center",padding:"15px"}}>
                Send Message <Icon name="arrow" size={16} />
              </button>
            </div>
          </div>

          {/* Info + FAQ */}
          <div>
            <div style={{marginBottom:"40px"}}>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"24px",fontWeight:600,marginBottom:"24px"}}>Contact Info</h2>
              <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                {[
                  {icon:"phone",label:"Phone",val:"+91 98765 43210"},
                  {icon:"mail",label:"Email",val:"hello@creativecart.in"},
                  {icon:"mapPin",label:"Address",val:"Shop No. 12, MG Road, Pune, Maharashtra 411001"},
                ].map(info => (
                  <div key={info.label} style={{display:"flex",gap:"16px",alignItems:"flex-start"}}>
                    <div style={{width:44,height:44,borderRadius:"50%",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <Icon name={info.icon} size={18} style={{color:"var(--gold)"}} />
                    </div>
                    <div>
                      <div style={{fontSize:"12px",fontWeight:600,color:"var(--gold)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"2px"}}>{info.label}</div>
                      <div style={{fontSize:"14px",color:"var(--charcoal)"}}>{info.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:"12px",marginTop:"28px"}}>
                {["Instagram","Facebook","Pinterest","WhatsApp"].map(s => (
                  <a key={s} href="#" style={{
                    width:40,height:40,borderRadius:"50%",background:"var(--cream)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    color:"var(--warm-gray)",textDecoration:"none",fontSize:"11px",fontWeight:600,
                    transition:"all 0.3s",border:"1px solid var(--soft-gray)"
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="white";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="var(--cream)";e.currentTarget.style.color="var(--warm-gray)";}}>
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"24px",fontWeight:600,marginBottom:"20px"}}>FAQ</h2>
              {faqs.map(([q,a],i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q" onClick={() => setOpenFaq(openFaq===i?null:i)}>
                    {q}
                    <span style={{transform:openFaq===i?"rotate(180deg)":"none",transition:"transform 0.3s",color:"var(--gold)",flexShrink:0,marginLeft:"12px"}}>
                      <Icon name="chevron" size={18} />
                    </span>
                  </div>
                  <div className={`faq-a ${openFaq===i?"open":""}`}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = ({ setPage }) => (
  <footer style={{background:"var(--charcoal)",color:"white",padding:"64px 24px 0"}}>
    <div style={{maxWidth:1280,margin:"0 auto"}}>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"48px",marginBottom:"48px"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"}}>
            <div style={{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,var(--dusty-rose),var(--gold))",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Icon name="gift" size={18} style={{color:"white"}} />
            </div>
            <div>
              <div style={{fontFamily:"'Great Vibes',cursive",fontSize:"26px",lineHeight:1}}>Creative Cart</div>
              <div style={{fontSize:"9px",letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase"}}>Handmade with Love</div>
            </div>
          </div>
          <p style={{fontSize:"14px",color:"rgba(255,255,255,0.55)",lineHeight:1.8,marginBottom:"24px",maxWidth:"300px"}}>
            We craft heartfelt, personalized gifts that celebrate every special moment in life. Made with love, delivered with care.
          </p>
          <div style={{display:"flex",gap:"8px"}}>
            {["Instagram","Facebook","Pinterest","YouTube"].map(s => (
              <a key={s} href="#" style={{
                width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.08)",
                display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.6)",
                textDecoration:"none",fontSize:"11px",fontWeight:600,transition:"all 0.3s",
                border:"1px solid rgba(255,255,255,0.1)"
              }}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="white";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.color="rgba(255,255,255,0.6)";}}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>
        {[
          {title:"Shop",links:[["Birthday Gifts","shop"],["Couple Gifts","shop"],["Gift Hampers","shop"],["Festive Gifts","shop"],["Custom Gifts","shop"]]},
          {title:"Help",links:[["Track Order","contact"],["Returns","contact"],["FAQ","contact"],["Shipping Info","contact"]]},
          {title:"Company",links:[["About Us","about"],["Contact","contact"],["Blog","home"],["Careers","home"]]},
        ].map(col => (
          <div key={col.title}>
            <div style={{fontSize:"12px",fontWeight:600,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",marginBottom:"20px"}}>{col.title}</div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {col.links.map(([l,p]) => (
                <button key={l} onClick={() => setPage(p)} style={{
                  background:"none",border:"none",cursor:"pointer",textAlign:"left",
                  fontSize:"14px",color:"rgba(255,255,255,0.55)",
                  fontFamily:"'DM Sans',sans-serif",transition:"color 0.3s",padding:0
                }}
                onMouseEnter={e=>e.target.style.color="var(--gold)"}
                onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.55)"}>{l}</button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",padding:"20px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
        <p style={{fontSize:"13px",color:"rgba(255,255,255,0.4)"}}>© 2025 Creative Cart. All rights reserved. Made with ❤️ in India.</p>
        <div style={{display:"flex",gap:"20px"}}>
          {["Privacy Policy","Terms of Service","Cookie Policy"].map(l => (
            <a key={l} href="#" style={{fontSize:"12px",color:"rgba(255,255,255,0.4)",textDecoration:"none",transition:"color 0.3s"}}
              onMouseEnter={e=>e.target.style.color="var(--gold)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.4)"}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// ─── QUICK VIEW MODAL ─────────────────────────────────────────────────────────
const QuickViewModal = ({ product, onClose, onAddCart, onWishlist, wishlisted }) => (
  <>
    <div className="overlay" onClick={onClose} />
    <div className="modal" style={{width:"min(900px,95vw)"}}>
      <div style={{background:"white",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        <div style={{position:"relative"}}>
          <img src={product.img} alt={product.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",minHeight:"360px"}} />
        </div>
        <div style={{padding:"40px",display:"flex",flexDirection:"column",gap:"16px"}}>
          <button onClick={onClose} style={{position:"absolute",top:20,right:20,background:"rgba(0,0,0,0.1)",border:"none",borderRadius:"50%",width:36,height:36,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Icon name="close" size={18} />
          </button>
          <div>
            <span style={{fontSize:"11px",fontWeight:600,letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase"}}>{product.cat}</span>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"26px",fontWeight:600,color:"var(--charcoal)",margin:"6px 0"}}>{product.name}</h2>
            <Stars rating={product.rating} />
          </div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"28px",fontWeight:700,color:"var(--dusty-rose)"}}>₹{product.price.toLocaleString()}</div>
          <p style={{fontSize:"14px",color:"var(--warm-gray)",lineHeight:1.8}}>{product.desc}</p>
          <div style={{display:"flex",gap:"12px",marginTop:"auto"}}>
            <button className="btn-primary" style={{flex:1,justifyContent:"center"}} onClick={() => { onAddCart(product); onClose(); }}>
              <Icon name="cart" size={16} /> Add to Cart
            </button>
            <button style={{
              width:48,height:48,borderRadius:"50%",border:`1.5px solid ${wishlisted?"var(--dusty-rose)":"var(--soft-gray)"}`,
              background:wishlisted?"var(--blush)":"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              transition:"all 0.3s",flexShrink:0
            }} onClick={() => onWishlist(product)}>
              <Icon name="heart" size={18} style={{color:wishlisted?"var(--dusty-rose)":"var(--warm-gray)"}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [viewProduct, setViewProduct] = useState(null);
  const [quickView, setQuickView] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
  };

  const handleAddCart = (product, qty = 1) => {
    setCart(c => {
      const ex = c.find(i => i.id === product.id);
      if (ex) return c.map(i => i.id === product.id ? {...i, qty: i.qty + qty} : i);
      return [...c, {...product, qty}];
    });
    showToast(`${product.name} added to cart!`);
  };

  const handleWishlist = (product) => {
    setWishlist(w => {
      const ex = w.find(i => i.id === product.id);
      if (ex) {
        showToast(`Removed from wishlist`);
        return w.filter(i => i.id !== product.id);
      }
      showToast(`Added to wishlist!`);
      return [...w, product];
    });
  };

  const handleView = (product) => {
    setViewProduct(product);
    setPage("product");
  };

  const wishlistIds = wishlist.map(w => w.id);

  // Scroll to top on page change
  useEffect(() => { window.scrollTo({top:0,behavior:"smooth"}); }, [page]);

  const renderPage = () => {
    if (page === "product" && viewProduct) {
      return <ProductDetailPage product={viewProduct} onAddCart={handleAddCart} onBack={() => setPage("shop")} />;
    }
    switch(page) {
      case "home": return <HomePage setPage={setPage} onAddCart={handleAddCart} onWishlist={handleWishlist} wishlistIds={wishlistIds} onView={handleView} />;
      case "shop": return <ShopPage onAddCart={handleAddCart} onWishlist={handleWishlist} wishlistIds={wishlistIds} onView={handleView} />;
      case "cart": return <CartPage cart={cart} setCart={setCart} setPage={setPage} />;
      case "checkout": return <CheckoutPage cart={cart} setPage={setPage} />;
      case "wishlist": return <WishlistPage wishlist={wishlist} onAddCart={handleAddCart} onWishlist={handleWishlist} onView={handleView} setPage={setPage} />;
      case "contact": return <ContactPage />;
      default: return <HomePage setPage={setPage} onAddCart={handleAddCart} onWishlist={handleWishlist} wishlistIds={wishlistIds} onView={handleView} />;
    }
  };

  return (
    <>
      <GlobalStyles />
      <Nav page={page} setPage={setPage} cartCount={cart.reduce((s,i)=>s+i.qty,0)} wishCount={wishlist.length} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
      {quickView && (
        <QuickViewModal product={quickView} onClose={() => setQuickView(null)} onAddCart={handleAddCart} onWishlist={handleWishlist} wishlisted={wishlistIds.includes(quickView.id)} />
      )}
      {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
    </>
  );
}