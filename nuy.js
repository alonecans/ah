/*
* Bot Ini Saya Bagikan gratis untuk penginstalan bisa liat di link bawah ini
* WhatsApp : https://wa.me/6283815956151
* Follow : https://www.instagram.com/thenay_xploit_


- What's New?
* New Features
*/

const {
   WAConnection,
   MessageType,
   Presence,
   Mimetype,
   GroupSettingChange,
   MessageOptions,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
   mentionedJid,
   processTime,
   ChatModification,
} = require('@adiwajshing/baileys');

const fs = require('fs');
const axios = require('axios');
const request = require('request');
const moment = require('moment-timezone');
const { exec } = require('child_process');
const fetch = require('node-fetch');
const tiktod = require('tiktok-scraper');
const ffmpeg = require('fluent-ffmpeg');
const google = require('google-it');
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const imgbb = require('imgbb-uploader');
const { removeBackgroundFromImageFile } = require('remove.bg');
const brainly = require('brainly-scraper');
const cd = 4.32e7;
const lolis = require('lolis.life');
const loli = new lolis();

const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'));
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'));
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'));
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'));
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'));
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'));
const user = JSON.parse(fs.readFileSync('./database/json/user.json'));
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'));
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'));
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'));
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'));
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'));
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'));
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'));
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'));
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'));
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'));
let { instagram, yt, groupLink } = setting;

const { fetchJson } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { color, bgcolor } = require('./lib/color');
const { help, bahasa, donasi, menu, limitend, limitcount, bottt } = require('./nuy/help');
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, open } = require('./lib/functions');

const vcard = 'BEGIN:VCARD\n' 
             + 'VERSION:3.0\n' 
             + 'FN:Nurul\n' 
             + 'ORG:Owner Mc-Bot;\n' 
             + 'TEL;type=CELL;type=VOICE;waid=6283815956151:+62 838-1595-6151\n' 
             + 'END:VCARD';

prefix = '#';
name = 'MANCA-BOT';
rdaftar = 'TERIMA KASIH TELAH DAFTAR MENJADI TEMEN MANCA-BOT 🤗';
rmenu = '╔═╦═╗╔══╗╔═╦╗╔═╗╔══╗\n║║║║║║╠╣║║║║║║═╣║╠╣║\n╚╩═╩╝╚╝╚╝╚╩═╝╚═╝╚╝╚╝';
botinfo = 'UNTUK INVITE BOT SILAHKAN DONASI DULU ATAU FOLLOW IG YAA 🤗';
limitt = 999999999;
memberLimit = 2;
ban = [];
premium = ['6283815956151@s.whatsapp.net'];

function kyun(seconds) {
   function pad(s) {
      return (s < 10 ? '0' : '') + s;
   }
   var hours = Math.floor(seconds / (60 * 60));
   var minutes = Math.floor((seconds % (60 * 60)) / 60);
   var seconds = Math.floor(seconds % 60);

   return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`;
}

async function starts() {
   const nuy = new WAConnection();
   nuy.logger.level = 'warn';
   console.log(banner.string);
   nuy.on('qr', () => {
      console.log(color('[', 'red'), color('!', 'yellow'), color(']', 'red'), color(' Scan qr by nurul', 'green'));
   });

   fs.existsSync('./nuy.json') && nuy.loadAuthInfo('./nuy.json');
   nuy.on('connecting', () => {
      start('2', 'Connecting...');
   });
   nuy.on('open', () => {
      success('2', 'Connected');
   });
   await nuy.connect({ timeoutMs: 30 * 1000 });
   fs.writeFileSync('./nuy.json', JSON.stringify(nuy.base64EncodedAuthInfo(), null, '\t'));

   nuy.on('group-participants-update', async (anu) => {
      if (!welkom.includes(anu.jid)) return;
      try {
         const mdata = await nuy.groupMetadata(anu.jid);
         console.log(anu);
         if (anu.action == 'add') {
            num = anu.participants[0];
            try {
               ppimg = await nuy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
            }
            teks = `*_Hallo👋_* @${num.split('@')[0]}\n selamat datang di group *${mdata.subject}*`;
            let buff = await getBuffer(ppimg);
            nuy.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [num] } });
         } else if (anu.action == 'promote') {
            num = anu.participants[0];
            try {
               ppimg = await nuy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
            }
            teks = `*_「 promote deteᴄted 」_*\n@${num.split('@')[0]} yang add admin siapa?, dah iᴢin oᴡner grup belum!`;
            let buff = await getBuffer(ppimg);
            nuy.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [num] } });
         } else if (anu.action == 'demote') {
            num = anu.participants[0];
            try {
               ppimg = await nuy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
            }
            teks = `*_「 demote deteᴄted 」_*\n@${num.split('@')[0]} yang un admin siapa?, dah iᴢin oᴡner grup belum!`;
            let buff = await getBuffer(ppimg);
            nuy.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [num] } });
         } else if (anu.action == 'remove') {
            num = anu.participants[0];
            try {
               ppimg = await nuy.getProfilePicture(`${num.split('@')[0]}@c.us`);
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
            }
            teks = `*_Sayonara👋_* @${num.split('@')[0]} semoga tenang di alam sana`;
            let buff = await getBuffer(ppimg);
            nuy.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { mentionedJid: [num] } });
         }
      } catch (e) {
         console.log('Error : %s', color(e, 'yellow'));
      }
   });

   nuy.on('CB:Blocklist', (json) => {
      if (blocked.length > 2) return;
      for (let i of json[1].blocklist) {
         blocked.push(i.replace('c.us', 's.whatsapp.net'));
      }
   });

   nuy.on('chat-update', async (mek) => {
      try {
         if (!mek.hasNewMessage) return;
         mek = JSON.parse(JSON.stringify(mek)).messages[0];
         if (!mek.message) return;
         if (mek.key && mek.key.remoteJid == 'status@broadcast') return;
         if (mek.key.fromMe) return;
         global.prefix;
         global.blocked;
         const content = JSON.stringify(mek.message);
         const from = mek.key.remoteJid;
         const type = Object.keys(mek.message)[0];
         const Nurul = ['0@s.whatsapp.net']; // ubah aja gapapa
         const farhan = mek.message.conversation;
         const insom = from.endsWith('@g.us');
         const nameReq = insom ? mek.participant : mek.key.remoteJid;
         pushname2 = nuy.contacts[nameReq] != undefined ? nuy.contacts[nameReq].vname || nuy.contacts[nameReq].notify : undefined;

         const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType;

         const date = new Date().toLocaleDateString();
         const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
         const jam = moment.tz('Asia/Jakarta').format('HH:mm');

         body =
            type === 'conversation' && mek.message.conversation.startsWith(prefix)
               ? mek.message.conversation
               : type == 'imageMessage' && mek.message.imageMessage.caption.startsWith(prefix)
               ? mek.message.imageMessage.caption
               : type == 'videoMessage' && mek.message.videoMessage.caption.startsWith(prefix)
               ? mek.message.videoMessage.caption
               : type == 'extendedTextMessage' && mek.message.extendedTextMessage.text.startsWith(prefix)
               ? mek.message.extendedTextMessage.text
               : '';
         budy = type === 'conversation' ? mek.message.conversation : type === 'extendedTextMessage' ? mek.message.extendedTextMessage.text : '';
         var Link =
            type === 'conversation' && mek.message.conversation
               ? mek.message.conversation
               : type == 'imageMessage' && mek.message.imageMessage.caption
               ? mek.message.imageMessage.caption
               : type == 'videoMessage' && mek.message.videoMessage.caption
               ? mek.message.videoMessage.caption
               : type == 'extendedTextMessage' && mek.message.extendedTextMessage.text
               ? mek.message.extendedTextMessage.text
               : '';
         const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase();
         const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
         const args = body.trim().split(/ +/).slice(1);
         const Far = args.join(' ');
         const isCmd = body.startsWith(prefix);
         nuy.chatRead(from);

         mess = {
            wait: '*⏳ Tunggu sedang di proses...*',
            success: '*Sukses...*',
            error: {
               stick: '*Gagal, tejadi kesalahan saat mengkonᴠersi gambar ke stiᴄker*',
               Iv: '*Maaf link tidak ᴠalid!*',
            },
            only: {
               group: '*Maaf perintah ini hanya bisa di gunakan dalam group!*',
               benned: '*Maaf nomer kamu ke banned silahkan hubungi owner agar membuka banned anda*',
               ownerG: '*Maaf perintah ini hanya bisa di gunakan oleh owner group!*',
               ownerB: '*Maaf perintah ini hanya bisa di gunakan oleh owner bot!* ',
               premium: '*Maaf fitur ini khusus user premium!*',
               userB: `*Hallo kak ${pushname2} kamu belom tedaftar didatabase silahkan ketik* \n${prefix}daftar`,
               admin: '*Maaf perintah ini hanya bisa di gunakan oleh admin group!*',
               Badmin: '*Maaf perintah ini hanya bisa di gunakan ketika bot menjadi admin!*',
               publikG: `*Maaf bot sekarang sudah dipriᴠate oleh owner*\n*untuk lebih jelasnya ketik* \n${prefix}infobot`,
            },
         };

         const botNumber = nuy.user.jid;
         const ownerNumber = ['6283815956151@s.whatsapp.net', '6283815956151@s.whataapp.net']; // owner number ubah aja
         const isGroup = from.endsWith('@g.us');
         const sender = isGroup ? mek.participant : mek.key.remoteJid;
         const groupMetadata = isGroup ? await nuy.groupMetadata(from) : '';
         const groupName = isGroup ? groupMetadata.subject : '';
         const groupId = isGroup ? groupMetadata.jid : '';
         const groupMembers = isGroup ? groupMetadata.participants : '';
         const groupDesc = isGroup ? groupMetadata.desc : '';
         const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
         const totalchat = await nuy.chats.all();
         const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
         const isGroupAdmins = groupAdmins.includes(sender) || false;
         const isWelkom = isGroup ? welkom.includes(from) : false;
         const isNsfw = isGroup ? nsfw.includes(from) : false;
         const isAnime = isGroup ? anime.includes(from) : false;
         const isSimi = isGroup ? samih.includes(from) : false;
         const isPublic = isGroup ? publik.includes(from) : false;
         const isAntiLink = isGroup ? antilink.includes(from) : false;
         const isBadWord = isGroup ? badword.includes(from) : false;
         const isOwner = ownerNumber.includes(sender);
         const isUser = user.includes(sender);
         const isBanned = ban.includes(sender);
         const isPrem = premium.includes(sender);

         const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
         };
         const reply = (teks) => {
            nuy.sendMessage(from, teks, text, { quoted: mek });
         };
         const sendMess = (hehe, teks) => {
            nuy.sendMessage(hehe, teks, text);
         };
         const sendPtt = (teks) => {
            nuy.sendMessage(from, audio, mp3, { quoted: mek });
         };
         const costum = (pesan, tipe, target, target2) => {
            nuy.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } });
         };
         const mentions = (teks, memberr, id) => {
            id == null || id == undefined || id == false
               ? nuy.sendMessage(from, teks.trim(), extendedText, { contextInfo: { mentionedJid: memberr } })
               : nuy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: memberr } });
         };

         colors = ['red', 'white', 'black', 'blue', 'yellow', 'green', 'aqua'];
         const isMedia = type === 'imageMessage' || type === 'videoMessage';
         const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
         const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
         const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
         const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');

         const checkLimit = (sender) => {
            let found = false;
            for (let lmt of _limit) {
               if (lmt.id === sender) {
                  limitCounts = limitt - lmt.limit;
                  found = true;
               }
            }
            if (found === false) {
               let obj = { id: sender, limit: 1 };
               _limit.push(obj);
               fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit));
               nuy.sendMessage(from, limitcount(limitCounts), text, { quoted: mek });
            }
         };
         if (isGroup) {
            try {
               const getmemex = groupMembers.length;
               if (getmemex <= memberLimit) {
                  nuy.sendMessage(from, `*maaf manca-bot tidak bisa masuk group karna member group ${groupMetadata.subject} tidak memenuhi limit member*\n\n*minimal member ${memberLimit}*`, text);
                  setTimeout(() => {
                     nuy.groupLeave(from);
                  }, 11000);
                  setTimeout(() => {
                     nuy.updatePresence(from, Presence.composing);
                  }, 10000);
                  setTimeout(() => {
                     reply(`*maaf manca-bot segera keluar dari group ${groupMetadata.subject}*`);
                  }, 0);
               }
            } catch (err) {
               console.error(err);
            }
         }
         const isLimit = (sender) => {
            let position = false;
            for (let i of _limit) {
               if (i.id === sender) {
                  let limits = i.limit;
                  if (limits >= limitt) {
                     position = true;
                     nuy.sendMessage(from, limitend(pushname2), text, { quoted: mek });
                     return true;
                  } else {
                     _limit;
                     position = true;
                     return false;
                  }
               }
            }
            if (position === false) {
               const obj = { id: sender, limit: 1 };
               _limit.push(obj);
               fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit));
               return false;
            }
         };
         const limitAdd = (sender) => {
            let position = false;
            Object.keys(_limit).forEach((i) => {
               if (_limit[i].id == sender) {
                  position = i;
               }
            });
            if (position !== false) {
               _limit[position].limit += 1;
               fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit));
            }
         };
         if (messagesLink.includes('://chat.whatsapp.com/')) {
            if (!isGroup) return;
            if (!isAntiLink) return;
            if (isGroupAdmins) return reply(`*${pushname2}* adalah admin group kamu tidak akan di kiᴄk ya cayang:V`);
            nuy.updatePresence(from, Presence.composing);
            if (messagesLink.includes('#izinadmin')) return reply('#izinadmin *_「 diterima 」_*');
            var kic = `${sender.split('@')[0]}@s.whatsapp.net`;
            reply(`*_「 link grup deteᴄted 」_*\nmaaf *${pushname2}* anda mengirim link grup!, anda segea dikiᴄk dari grup *${groupMetadata.subject}*`);
            setTimeout(() => {
               nuy.groupRemove(from, [kic]).catch((e) => {
                  reply(`*ERR:* ${e}`);
               });
            }, 11000);
            setTimeout(() => {
               nuy.groupRemove(from, [Kick]).catch((e) => {
                  reply(`*ERROR:* ${e}`);
               });
            }, 10000);
            setTimeout(() => {
               reply(`*take of otᴡ kiᴄk!*`);
            }, 0);
         }
         if (messagesLink.includes('manca')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/manca.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('hallo')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/nani.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('tapi')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/tapi.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('boong')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/boong.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('iri')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/iri.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bilang')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/iri.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound1')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound1.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound2')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound2.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound3')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound3.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound4')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound4.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound5')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound5.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound6')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound6.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound7')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound7.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound8')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound8.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound9')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound9.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound10')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound10.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound11')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound11.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound12')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound12.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sound13')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sound13.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('mengontol')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/mengontol.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('ngocok')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ngocok.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bapak')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/bapaklo.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('terimakasih')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/mksih.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('yamete')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/yamete.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('ngakak')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ngakak.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('wkwk')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ngakak.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('haha')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ngakak.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('pap')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/pap.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('pota')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/pota.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sad')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sad.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('pale')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/pale.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('anjim')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/anjim.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('ara')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ara2.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('ara2')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/ara1.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bengek')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/bengek.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bernyanyi')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/bernyanyi.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('krik')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/krik.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('menyukaiku')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/menyukaiku.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('why')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/why.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('what')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/why.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('you')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/why.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('because')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/because.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('jujur')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/jujur.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('goodlooking')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/goodlooking.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('makasih')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/mksh.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('pala')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/pal.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('baka')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/baka.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('nani')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/nani.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#menu')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/onichan.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#menu')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/arigato.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#help')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/haik.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('playdate')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/playdate.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('jamet')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/jamet.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('kuntul')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/kuntul.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('onichan')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/onichaneh.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('roti')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sariroti.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('tolil')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/tolol.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('tolol')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/tolol.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('woi')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/woi.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#ngewe')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#hentai')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#cesex')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#randombokep')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#pornhub')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#xvideos')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#nsfwloli')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#nsfwblowjob')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#nsfwneko')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#nsfwtrap')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#nekopoi')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#nsfw on')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/astag.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('gabut')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/gabut.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('bosan')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/bosan.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sensei')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/sensei.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('need')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/need.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('see')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/see.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('yameteonichan')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/yameteonic.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#daftar')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/halo.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('malam')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/malam.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('pagi')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/pagi.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('goyang')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/lagi goyang.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('@6283815956151')) {
            // respon tag ubah aja
            reply(`*maaf ${pushname2}, oᴡner manca-bot tidak menerima tag ehhehe*`);
            const d = fs.readFileSync('./sticker/owner.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('@994408500027')) {
            // respon tag ubah aja
            reply(`*maaf ${pushname2}, panggil nama aja, manca tidak menerima tag!*`);
            const d = fs.readFileSync('./sticker/owner1.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('pp')) {
            // respon tag ubah aja
            reply(`Assalamualaikum Dulu`);
            const d = fs.readFileSync('./sticker/coret.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('assalamuaikum')) {
            // respon tag ubah aja
            reply(`Waalaikumsalam`);
            const d = fs.readFileSync('./sticker/oke.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('kisahnyata')) {
            // respon tag ubah aja
            const d = fs.readFileSync('./sticker/kisah.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('#linkgrup')) {
            // respon tag ubah aja
            const d = fs.readFileSync('./sticker/linkgrup.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('why')) {
            // respon tag ubah aja
            const d = fs.readFileSync('./sticker/endak.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('what')) {
            // respon tag ubah aja
            const d = fs.readFileSync('./sticker/endak.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('you')) {
            // respon tag ubah aja
            const d = fs.readFileSync('./sticker/endak.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('ciluk')) {
            // respon tag ubah aja
            const d = fs.readFileSync('./sticker/ciluk.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('baa')) {
            // respon tag ubah aja
            const d = fs.readFileSync('./sticker/ba.webp');
            nuy.sendMessage(from, d, sticker, { quoted: mek });
         }
         if (messagesLink.includes('arigato')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/arigatou.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('mimio')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/mimio.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('nikoni')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/nikoni.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('hemm')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/hem.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('#owner')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/owner.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('sholawat')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/maulaya.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (messagesLink.includes('wors')) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/wors.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (bad.includes(messagesLink)) {
            nuy.updatePresence(from, Presence.composing);
            const loli = fs.readFileSync('./mp3/kasar.mp3');
            nuy.sendMessage(from, loli, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true });
         }
         if (bad.includes(messagesLink)) {
            if (!isGroup) return;
            if (!isAntiLink) return;
            if (isGroupAdmins) return reply(`*${pushname2}* adalah admin group kamu tidak akan di kiᴄk`);
            nuy.updatePresence(from, Presence.composing);
            var Kick = `${sender.split('@')[0]}@s.whatsapp.net`;
            setTimeout(() => {
               reply(`*take of otᴡ kiᴄk!*`);
            }, 11000);
            setTimeout(() => {
               nuy.groupRemove(from, [Kick]).catch((e) => {
                  reply(`*ERROR:* ${e}`);
               });
            }, 10000);
            setTimeout(() => {
               reply(`*_「 badᴡord deteᴄted 」_*\nmaaf *${pushname2}* anda bebiᴄara kotor!, anda segea dikiᴄk dari grup *${groupMetadata.subject}*`);
            }, 0);
         }

         if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length));
         if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length));

         if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length));
         if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length));

         switch (command) {
            case 'menu':
               if (!isUser) return reply(mess.only.userB);
               if (isBanned) return reply(mess.only.benned);
               me = nuy.user;
               user.push(sender);
               uptime = process.uptime();
               const Menu = {
               text: `✿➤「 *User info* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ Name: ${pushname2}
۝♡ۣۜۜ፝͜͜͡͡✿➤ Limit: ${limitt}
۝♡ۣۜۜ፝͜͜͡͡✿➤ Prefix: ${prefix}
۝♡ۣۜۜ፝͜͜͡͡✿➤ Registeed: √
۝♡ۣۜۜ፝͜͜͡͡✿➤ Tedaftar: ${user.length} 

✿➤  「 *Mc-Bot Info* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}report
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}info
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}donasi
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}oᴡner
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}speed
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}daftar
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}limit
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}totaluser
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bloᴄklist
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}banlist
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}premiumlist
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bahasa

✿➤  「 *Mc-Bot Doᴡnload* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tiktokstalk
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}igstalk
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}instaᴠid
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}instaimg
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}instastory 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}playmp3
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}fb 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}snaᴄk 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ytmp3
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ytmp4
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}joox
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}smule
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ssᴡeb
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}url2img
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tiktok
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}fototiktok
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kbbi
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡait
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}trendtᴡit
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}google

✿➤  「 *Mc-Bot Creator* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotemaker
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nulis
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}slide
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}trigger
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡasted
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}draᴡing
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gtaᴠ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡanted
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}laptop
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}linephoto
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄrossgun
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}raindrop
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nightbeaᴄh
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sketᴄh
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tts
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gemuk
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tupai
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bass
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sloᴡ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ttp
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sticker
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gifstiker
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}toimg
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nangis
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}peluk
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄium
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ngeᴡe
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}img2url
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tomp3
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tomp4
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}oᴄr

✿➤  「 *Mc-Bot Sound* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ iri
۝♡ۣۜۜ፝͜͜͡͡✿➤ tapi boong
۝♡ۣۜۜ፝͜͜͡͡✿➤ bernyanyi
۝♡ۣۜۜ፝͜͜͡͡✿➤ pale
۝♡ۣۜۜ፝͜͜͡͡✿➤ pota
۝♡ۣۜۜ፝͜͜͡͡✿➤ yamete
۝♡ۣۜۜ፝͜͜͡͡✿➤ sad

✿➤  「 *Mc-Bot Anime* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}neko
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}loli
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}husbu
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}neonime
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}naruto
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}minato
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}boruto
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hinata
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sakura
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}sasuke
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}toukaᴄhan
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}riᴢe
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}akira
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}itori
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kurumi
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}miku
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}anime

✿➤  「 *Mc-Bot Grup* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ganteng
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}cantik
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}beban
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}closetime
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}modeanime [on/off]
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}antilink [on/off]
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}antibadᴡord [on/off]
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}listbadᴡord
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡelᴄome [on/off]
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}grup
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}oᴡnergrup
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setpp
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infogᴄ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}add
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kiᴄk 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kiᴄktime 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}promote 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}demote
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setname
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setdesᴄ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}grup
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tagme
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hidetag
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tagall
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}mentionall
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}jadian
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}fitnah
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}listadmin
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfᴡ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}simih

✿➤  「 *Mc-Bot Maker* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tahta
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}burnpape
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}8bit
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gloᴡneon
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gsuggest
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄandlemug
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}loᴠemss
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}mugfloᴡe
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}narutobanne
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}papeglass
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}romanᴄe
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}shadoᴡ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}glitᴄh
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄoffe
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄandy
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hpotte
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡoodbloᴄk

✿➤  「 *Mc-Bot Funn* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}anjing
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kuᴄing
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄybepunk
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}testime
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴢodiak
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hilih
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄeᴄan
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄogan
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}apakah
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kapankah
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bisakah
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}rate
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡatak
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hobby
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infogempa
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infonomor
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quotes
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}truth
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}dare
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katabijak
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}fakta
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}darkjokes
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}buᴄin
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pantun
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kataᴄinta
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}jadᴡaltᴠnoᴡ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randomkpop
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hekebuᴄin
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}katailham
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}jarak
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}translate
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pasangan 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}gantengᴄek 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄantikᴄek 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}artinama 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pesengay 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pbuᴄin 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bpfont 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}textstyle 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}jadᴡaltᴠ 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}lirik 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄhord 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴡiki 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}brainly 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}resepmasakan 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}beitahoax
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}map 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}film 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pinterest
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infoᴄuaᴄa 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}jamdunia 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}mimpi
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}infoalamat 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}playstore
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}readmore
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}puisiimg
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}asupan
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tebakgambar
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄaklontong
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}family100
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}memeindo
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}kalkulator
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}moddroid
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}happymod

✿➤  「 *Mc-Bot Bahaya* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄesex
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}randombokep
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pornhub
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}xᴠideos
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfᴡloli
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfᴡbloᴡjob
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfᴡneko
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nsfᴡtrap
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hentai
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}nekopoi

✿➤  「 *Mc-Bot Religi* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}jadᴡalsholat
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quran
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quranlist
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}quransurah 

✿➤  「 *Mc-Bot Other* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}beᴄrypt 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}enᴄode64
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}deᴄode64
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}enᴄode32
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}deᴄode32
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}enᴄbinary 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}deᴄbinary 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}enᴄoᴄtal 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}deᴄoᴄtal 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}hashidentifie 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}dorking 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}pastebin 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}tinyurl 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bitly 

✿➤  「 *Mc-Bot Spam* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}spamᴄall 
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}spamgmail 

✿➤  「 *Mc-Bot Owner* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}addprem
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}remoᴠeprem
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}addbadᴡord
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}delbadᴡord
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}addbuᴄin
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}addaudio
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}addstiᴄker
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setmemlimit
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}resetlimit
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setlimit
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setreply
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setprefix
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setnamebot
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}setppbot
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bᴄ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bᴄgᴄ
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ban
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}unban
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}bloᴄk
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}unbloᴄk
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄlearall
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}delete
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}ᴄlone
۝♡ۣۜۜ፝͜͜͡͡✿➤ ${prefix}leaᴠe

✿➤ 「 *Thanks To* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ MANCA-BOT
۝♡ۣۜۜ፝͜͜͡͡✿➤ FADLI-BOT
۝♡ۣۜۜ፝͜͜͡͡✿➤ FX-SX-BOT

✿➤ 「 *RULES MC-BOT* 」

۝♡ۣۜۜ፝͜͜͡͡✿➤ GUNAKAN BOT YG BAIK
۝♡ۣۜۜ፝͜͜͡͡✿➤ JANGAN VC/VON MC-BOT
۝♡ۣۜۜ፝͜͜͡͡✿➤ PATUHI PERATURAN BOT/GRUP`,

                  contextInfo: {
                     mentionedJid: [sender],
                  },
               };
               nuy.sendMessage(from, Menu, text, {
                  quoted: {
                     key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) },
                     message: {
                        imageMessage: {
                           url: 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                           mimetype: 'image/jpeg',
                           caption: 'MancaBot FdlBot FxSxBot',
                           fileSha256: '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                           fileLength: '28777',
                           height: 1080,
                           width: 1079,
                           mediaKey: 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                           fileEncSha256: 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=',
                           directPath: '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69',
                           mediaKeyTimestamp: '1610993486',
                           jpegThumbnail: fs.readFileSync('mc.jpg');
                           scansSidecar: '1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==',
                        },
                     },
                  },
               });
               break;
            case 'zodiak':
               if (args.length < 1) return reply('Masukkan nama zodiak');
               nuy.updatePresence(from, Presence.composing);
               if (!isUser) return reply(mess.only.userB);
               teks = body.slice(8);
               try {
                  data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${VthearApi}`);
                  hasil = `Zodiak : *${data.result.zodiak}*\nRamalan hari ini : *${data.result.ramalan}*\n${data.result.inspirasi}`;
                  reply(hasil);
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'cyberpunk':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               nuy.updatePresence(from, Presence.composing);
               co = ['anime cyberpunk', 'fotografi cyberpunk', 'tokyo cyberpunk'];
               nk = co[Math.floor(Math.random() * co.length)];
               try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                     method: 'get',
                  });
                  reply(mess.wait);
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek);
                  nuy.sendMessage(from, pok, image, {
                     quoted: mek,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'wasted':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ger);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  teks = `${anu.display_url}`;
                  ranp = getRandom('.gif');
                  rano = getRandom('.webp');
                  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`;
                  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                     fs.unlinkSync(ranp);
                     if (err) return reply(mess.error.stick);
                     nobg = fs.readFileSync(rano);
                     nuy.sendMessage(from, nobg, sticker, {
                        quoted: mek,
                     });
                     fs.unlinkSync(rano);
                  });
               } else {
                  reply('Gunakan foto!');
               }
               break;

            case 'drawing':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'nightbeach':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'laptop':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'linephoto':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'raindrop':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'sketch':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'crossgun':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'wanted':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;

            case 'gtav':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ted);
                  tels = body.slice(7);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`);
                  nuy.sendMessage(from, hehe, image, { quoted: mek });
               } else {
                  reply('reply imagenya kak!');
               }
               break;
            case 'cecan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               tels = body.slice(5);
               nuy.updatePresence(from, Presence.composing);
               ty = ['ulzhang girl', 'cewek cantik', 'cewe hijab', 'cute girl', 'cewe rusia cantik', 'cewe jepang cantik', 'cecan indo'];
               nk = ty[Math.floor(Math.random() * ty.length)];
               try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                     method: 'get',
                  });
                  reply(mess.wait);
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek);
                  nuy.sendMessage(from, pok, image, {
                     quoted: mek,
                     caption: `Gimana ?`,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'cogan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               nuy.updatePresence(from, Presence.composing);
               uk = ['ulzhang boy', 'cowok keren', 'cowo ganteng', 'cogan', 'cogan jawa'];
               nk = uk[Math.floor(Math.random() * uk.length)];
               try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                     method: 'get',
                  });
                  reply(mess.wait);
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek);
                  nuy.sendMessage(from, pok, image, {
                     quoted: mek,
                     caption: `Wah ganteng kek gua`,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'jadian':
               limitAdd(sender);
               isLimit(sender);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               jds = [];
               const jdii = groupMembers;
               const koss = groupMembers;
               const akuu = jdii[Math.floor(Math.random() * jdii.length)];
               const diaa = koss[Math.floor(Math.random() * koss.length)];
               teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `;
               jds.push(akuu.jid);
               jds.push(diaa.jid);
               mentions(teks, jds, true);
               break;
            case 'cantik':
               limitAdd(sender);
               isLimit(sender);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               membr = [];
               const mes = groupMembers;
               const msk = groupMembers;
               const siaps = mes[Math.floor(Math.random() * mes.length)];
               const sips = pushname2[Math.floor(Math.random() * msk.length)];
               teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`;
               membr.push(siaps.jid);
               mentions(teks, membr, true);
               break;
            case 'slow':
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await nuy.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a 'atempo=0.7,asetrate=44100' ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  nuy.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
            case 'gemuk':
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await nuy.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a 'atempo=1.6,asetrate=22100' ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  nuy.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
            case 'tupai':
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await nuy.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a 'atempo=0.5,asetrate=65100' ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  nuy.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
            case 'ganteng':
               limitAdd(sender);
               isLimit(sender);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               membr = [];
               const nus = groupMembers;
               const msl = groupMembers;
               const siapss = nus[Math.floor(Math.random() * nus.length)];
               const sipss = pushname2[Math.floor(Math.random() * msl.length)];
               teks = `*Yang Paling Ganteng Disini Adalah :* @${siapss.jid.split('@')[0]}`;
               membr.push(siapss.jid);
               mentions(teks, membr, true);
               break;
            case 'beban':
               limitAdd(sender);
               isLimit(sender);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               membr = [];
               const nge = groupMembers;
               const tod = groupMembers;
               const beb = nge[Math.floor(Math.random() * nge.length)];
               const an = pushname2[Math.floor(Math.random() * tod.length)];
               teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`;
               membr.push(beb.jid);
               mentions(teks, membr, true);
               break;
            case 'brainly':
               if (!isUser) return reply(mess.only.userB);

               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               brien = body.slice(9);
               brainly(`${brien}`).then((res) => {
                  teks = '❉───────────────────────❉\n';
                  for (let Y of res.data) {
                     teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`;
                  }
                  nuy.sendMessage(from, teks, text, { quoted: mek, detectLinks: false });
                  console.log(res);
               });
               await limitAdd(sender);
               break;
            case 'daftar':
               nuy.updatePresence(from, Presence.composing);
               if (isUser) return reply('*kamu sudah menjadi teman Mc-Bot :d*');
               if (isBanned) return reply(mess.only.benned);
               user.push(sender);
               fs.writeFileSync('./database/json/user.json', JSON.stringify(user));
               try {
                  ppimg = await nuy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`);
               } catch {
                  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
               }
               captionnya = `╭─「 *_pendaftaran_* 」\`\`\`\n│ pendaftaran behasil dengan sn: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`pada ${date} ${time}\`\`\`\n│\`\`\`「 nama 」: ${pushname2}\`\`\`\n│\`\`\`「 nomor 」: wa.me/${
                  sender.split('@')[0]
               }\`\`\`\n│\`\`\`untuk menggunakan bot\`\`\`\n│\`\`\`silahkan\`\`\`\n│\`\`\`kirim ${prefix}help/menu\`\`\`\n│\`\`\`\n│total pengguna: ${user.length} orang\`\`\`\n╰────────────────`;
               daftarimg = await getBuffer(ppimg);
               nuy.sendMessage(from, daftarimg, image, { quoted: mek, caption: captionnya });
               break;
            case 'help':
               if (!isUser) return reply(mess.only.userB);
               if (isBanned) return reply(mess.only.benned);
               uptime = process.uptime();
               user.push(sender);
               myMonths = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
               myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
               var tgl = new Date();
               var day = tgl.getDate();
               bulan = tgl.getMonth();
               var thisDay = tgl.getDay(),
                  thisDay = myDays[thisDay];
               var yy = tgl.getYear();
               var year = yy < 1000 ? yy + 1900 : yy;
               const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`;
               await costum(help(prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal), text, Nurul, rmenu);
               break;
            case 'infobot':
               await costum(bottt(prefix), text, Nurul, botinfo);
               break;
            case 'profile':
               nuy.updatePresence(from, Presence.composing);

               if (!isUser) return reply(mess.only.userB);
               if (isBanned) return reply(mess.only.benned);
               try {
                  profil = await nuy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`);
               } catch {
                  profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
               }
               profile = `╭─「 *_profile anda_* 」\n│• *name:* ${pushname2}\n│• *use tedaftar:* √\n│• *link:* wa.me/${sender.split('@')[0]}\n╰────────────────────`;
               buff = await getBuffer(profil);
               nuy.sendMessage(from, buff, image, { quoted: mek, caption: profile });
               break;

            case 'bahasa':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               nuy.sendMessage(from, bahasa(prefix), text, { quoted: mek });
               break;
            case 'donasi':
            case 'donate':
               nuy.sendMessage(from, donasi(name), text, { quoted: mek });
               break;
            case 'info':
               me = nuy.user;
               user.push(sender);
               uptime = process.uptime();
               teks = `        「Bot Info」\n\n➻ *Nama bot* : ${me.name}\n➻ *Oᴡner bot* : Nurul\n➻ *Prefix* : 「${prefix} 」\n➻ *Total bloᴄk* : ${blocked.length}\n➻ *Aktif sejak* : ${kyun(uptime)}\n➻ *Total pengguna* : ${
                  user.length
               } use\n\n Follow : https://www.instagram.com/thenay_xploit_`;
               const daca = fs.readFileSync('mc.jpg');
               nuy.sendMessage(from, daca, image, { quoted: mek, caption: teks });
               break;
            case 'totaluser':
               nuy.updatePresence(from, Presence.composing);

               if (!isUser) return reply(mess.only.userB);
               if (!isOwner) return reply(mess.only.ownerB);
               teks = `╭────「 *TOTAL USER ${name}* 」\n`;
               no = 0;
               for (let hehehe of user) {
                  no += 1;
                  teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`;
               }
               teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`;
               nuy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: user } });
               break;
            case 'blocklist':
               teks = 'List Block :\n';
               for (let block of blocked) {
                  teks += `~> @${block.split('@')[0]}\n`;
               }
               teks += `Total : ${blocked.length}`;
               nuy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: blocked } });
               break;
            case 'banlist':
               ben = '```List Banned``` :\n';
               for (let banned of ban) {
                  ben += `~> @${banned.split('@')[0]}\n`;
               }
               ben += `Total : ${ban.length}`;
               nuy.sendMessage(from, ben.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: ban } });
               break;
            case 'premiumlist':
               nuy.updatePresence(from, Presence.composing);

               if (!isUser) return reply(mess.only.userB);
               teks = `╭─「 *TOTAL USER PREMIUM ${name}* 」\n`;
               no = 0;
               for (let prem of premium) {
                  no += 1;
                  teks += `[${no.toString()}] @${prem.split('@')[0]}\n`;
               }
               teks += `│+ Total User Premium : ${premium.length}\n╰──────⎿ *${name}* ⏋────`;
               nuy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { mentionedJid: premium } });
               break;
            case 'ban':
               nuy.updatePresence(from, Presence.composing);
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               ban = mentioned;
               reply(`berhasil banned : ${ban}`);
               break;
            case 'tahta':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}tahta Mc-Bot`);
               teks = body.slice(6);
               reply(mess.wait);
               buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${VthearApi}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'burnpaper':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}burnpaper Mc-Bot`);
               todi = body.slice(10);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case '8bit':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}8bit Manca/Bot`);
               ds = `${body.slice(10)}`;
               tex1 = ds.split('/')[0];
               tex2 = ds.split('/')[1];
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tex1}&text2=${tex2}`, { method: 'get' });
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'glowneon':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}glowneon Mc-Bot`);
               tekas = body.slice(9);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'gsuggest':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest Manca/Bot/wea`);
               du = `${body.slice(9)}`;
               ted1 = du.split('/')[0];
               ted2 = du.split('/')[1];
               ted3 = du.split('/')[2];
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, { method: 'get' });
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'candlemug':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}candlemug Mc-Bot`);
               ddu = body.slice(10);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'lovemss':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}lovemss Mc-Bot`);
               lop = body.slice(8);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'mugflower':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}mugflower Mc-Bot`);
               mug = body.slice(10);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'narutobanner':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner Mc-Bot`);
               nar = body.slice(13);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'paperglass':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}paperglass Mc-Bot`);
               papg = body.slice(11);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'romance':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}romance Mc-Bot`);
               roce = body.slice(7);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'shadow':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}shadow Mc-Bot`);
               sdow = body.slice(7);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'glitch':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}glitch Manca/Bot`);
               gl = `${body.slice(7)}`;
               gel1 = gl.split('/')[0];
               gel2 = gl.split('/')[1];
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, { method: 'get' });
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'coffe':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}coffe Mc-Bot`);
               kop = body.slice(6);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'candy':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}candy Mc-Bot`);
               cndy = body.slice(6);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'hpotter':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}hpotter Mc-Bot`);
               hpter = body.slice(8);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'woodblock':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply(`Contoh: ${prefix}woodblock Mc-Bot`);
               woblk = body.slice(10);
               reply(mess.wait);
               buffer = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'addprem':
               nuy.updatePresence(from, Presence.composing);
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               premium = addpremium;
               reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`);
               break;
            case 'removeprem':
               if (!isOwner) return reply(mess.only.ownerB);
               rprem = body.slice(13);
               premium.splice(`${rprem}@s.whatsapp.net`, 1);
               reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`);
               break;
            case 'unban':
               if (!isOwner) return reply(mess.only.ownerB);
               bnnd = body.slice(8);
               ban.splice(`${bnnd}@s.whatsapp.net`, 1);
               reply(`Nomor wa.me/${bnnd} telah di unban!`);
               break;
            case 'block':
               nuy.updatePresence(from, Presence.composing);
               if (!isGroup) return reply(mess.only.group);
               if (!isOwner) return reply(mess.only.ownerB);
               nuy.blockUser(`${body.slice(7)}@c.us`, 'add');
               nuy.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text);
               break;
            case 'unblock':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isOwner) return reply(mess.only.ownerB);
               nuy.blockUser(`${body.slice(9)}@c.us`, 'remove');
               nuy.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text);
               break;
            case 'readmore':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('teks nya mana om?');
               var kls = body.slice(9);
               var has = kls.split('/')[0];
               var kas = kls.split('/')[1];
               if (args.length < 1) return reply(mess.blank);
               nuy.sendMessage(
                  from,
                  `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}`,
                  text,
                  { quoted: mek }
               );
               break;
            case 'resetlimit':
               if (!isOwner) return reply(mess.only.ownerB);
               var obj = [];
               fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj));
               await reply(`LIMIT BERHASIL DI RESET`);
               break;
            case 'limit':
               var found = false;
               const limidat = JSON.parse(fs.readFileSync('./database/json/limit.json'));
               for (let lmt of limidat) {
                  if (lmt.id === sender) {
                     let limitCounts = limitt - lmt.limit;
                     if (limitCounts <= 0) return reply(from, `Limit anda habis`, id);
                     await reply(`*LIMIT ANDA TINGGAL: ${limitCounts}*`);
                     found = true;
                  }
               }
               if (found === false) {
                  let obj = { id: sender, limit: 1 };
                  limit.push(obj);
                  fs.writeFileSync('./database/json/limit.json', JSON.stringify(limit, 1));
                  await reply(`LIMIT ANDA ${limitCounts}`);
               }
               break;
            case 'ocr':
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  const media = await nuy.downloadAndSaveMediaMessage(encmedia);
                  reply(mess.wait);
                  await recognize(media, { lang: 'eng+ind', oem: 1, psm: 3 })
                     .then((teks) => {
                        reply(teks.trim());
                        fs.unlinkSync(media);
                     })
                     .catch((err) => {
                        reply(err.message);
                        fs.unlinkSync(media);
                     });
               } else {
                  reply('Foto aja kak Jangan Video');
               }
               await limitAdd(sender);
               break;
            case 'gifstiker':
            case 'stiker':
            case 'sticker':
            case 'gifsticker':
            case 'stickergif':
            case 'stikergif':
            case 'sgif':
            case 's':
               if (isBanned) return reply(mess.only.benned);
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  reply(mess.wait);
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  const media = await nuy.downloadAndSaveMediaMessage(encmedia);
                  ran = getRandom('.webp');
                  await ffmpeg(`./${media}`)
                     .input(media)
                     .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`);
                     })
                     .on('error', function (err) {
                        console.log(`Error : ${err}`);
                        fs.unlinkSync(media);
                        reply(mess.error.stick);
                     })
                     .on('end', function () {
                        console.log('Finish');
                        buff = fs.readFileSync(ran);
                        nuy.sendMessage(from, buff, sticker, { quoted: mek });
                        fs.unlinkSync(media);
                        fs.unlinkSync(ran);
                     })
                     .addOutputOptions([
                        `-vcodec`,
                        `libwebp`,
                        `-vf`,
                        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
                     ])
                     .toFormat('webp')
                     .save(ran);
               } else if (((isMedia && mek.message.videoMessage.seconds < 11) || (isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) && args.length == 0) {
                  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  const media = await nuy.downloadAndSaveMediaMessage(encmedia);
                  ran = getRandom('.webp');
                  reply(mess.wait);
                  await ffmpeg(`./${media}`)
                     .inputFormat(media.split('.')[1])
                     .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`);
                     })
                     .on('error', function (err) {
                        console.log(`Error : ${err}`);
                        fs.unlinkSync(media);
                        tipe = media.endsWith('.mp4') ? 'video' : 'gif';
                        reply(`Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.`);
                     })
                     .on('end', function () {
                        console.log('Finish');
                        buff = fs.readFileSync(ran);
                        nuy.sendMessage(from, buff, sticker);
                        fs.unlinkSync(media);
                        fs.unlinkSync(ran);
                     })
                     .addOutputOptions([
                        `-vcodec`,
                        `libwebp`,
                        `-vf`,
                        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
                     ])
                     .toFormat('webp')
                     .save(ran);
               }
               await limitAdd(sender);
               break;
            case 'trigger':
               if (!isUser) return reply(mess.only.userB);
               var imgbb = require('imgbb-uploader');
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  reply(mess.wait);
                  owgi = await nuy.downloadAndSaveMediaMessage(ger);
                  anu = await imgbb('08579d070df9a07cb1c2ee565aece767', owgi);
                  teks = `${anu.display_url}`;
                  ranp = getRandom('.gif');
                  rano = getRandom('.webp');
                  anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`;
                  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                     fs.unlinkSync(ranp);
                     if (err) return reply(mess.error.stick);
                     nobg = fs.readFileSync(rano);
                     nuy.sendMessage(from, nobg, sticker, { quoted: mek });
                     fs.unlinkSync(rano);
                  });
               } else {
                  reply('Gunakan foto!');
               }
               break;

            case 'img2url':
               if (!isUser) return reply(mess.only.userB);

               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
               var media = await nuy.downloadAndSaveMediaMessage(encmedia);
               var imgbb = require('imgbb-uploader');
               imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                  .then((data) => {
                     var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`;
                     ibb = fs.readFileSync(media);
                     nuy.sendMessage(from, ibb, image, { quoted: mek, caption: caps });
                  })
                  .catch((err) => {
                     throw err;
                  });
               await limitAdd(sender);
               break;

            case 'kalkulator':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1)
                  return reply(
                     `[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`
                  );
               mtk = `${body.slice(12)}`;
               anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, { method: 'get' });
               nuy.sendMessage(from, `*${anu.result.data}*`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'owner':
               nuy.sendMessage(from, { displayname: 'jeff', vcard: vcard }, MessageType.contact, { quoted: mek });
               nuy.sendMessage(from, '*Tuh owner ku nama nya Nurul, jangan spam, di blok nanti nangis:V*', text, { quoted: mek });
               break;
            case 'fitnah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`);
               var gh = body.slice(8);
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               var replace = gh.split('/')[0];
               var target = gh.split('/')[1];
               var bot = gh.split('/')[2];
               nuy.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } });
               break;

            case 'infogc':
            case 'groupinfo':
            case 'infogrup':
            case 'grupinfo':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               nuy.updatePresence(from, Presence.composing);
               if (!isGroup) return reply(mess.only.group);
               try {
                  ppUrl = await nuy.getProfilePicture(from);
               } catch {
                  ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
               }
               reply(mess.wait); // leave empty to get your own
               buffer = await getBuffer(ppUrl);
               nuy.sendMessage(from, buffer, image, { quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}` });
               break;
            case 'trendtwit':
               nuy.updatePresence(from, Presence.composing);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, { method: 'get' });
               reply(mess.wait);
               teks = '=================\n';
               for (let i of data.result) {
                  teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'testime':
               setTimeout(() => {
                  nuy.sendMessage(from, 'Waktu habis:v', text, { quoted: mek }); // ur cods
               }, 10000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '5 Detik lagi', text, { quoted: mek }); // ur cods
               }, 5000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '10 Detik lagi', text, { quoted: mek }); // ur cods
               }, 0); // 1000 = 1s,
               break;
            case 'neonime':
               nuy.updatePresence(from, Presence.composing);
               data = await fetchJson(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, { method: 'get' });
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (isBanned) return reply(mess.only.benned);
               if (!isGroup) return reply(mess.only.group);
               reply(mess.wait);
               teks = '#############################\n';
               for (let i of data.result) {
                  teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'animehug':
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, { method: 'get' });
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (isBanned) return reply(mess.only.benned);
               if (!isGroup) return reply(mess.only.group);
               reply(mess.wait);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  buffer = fs.readFileSync(rano);
                  nuy.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gruplink':
            case 'grouplink':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               linkgc = await nuy.groupInviteCode(from);
               yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*\n Bagikan Link Nya Ke Grup Laen Jangan Lupa Izin`;
               nuy.sendMessage(from, yeh, text, { quoted: mek });
               break;
            case 'hidetag':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               var value = body.slice(9);
               var group = await nuy.groupMetadata(from);
               var member = group['participants'];
               var mem = [];
               member.map(async (adm) => {
                  mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
               });
               var options = {
                  text: value,
                  contextInfo: { mentionedJid: mem },
                  quoted: mek,
               };
               nuy.sendMessage(from, options, text);
               break;
            case 'gantengcek':
            case 'cekganteng':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               ganteng = body.slice(12);
               const gan = ['10%', '30%', '20%', '40%', '50%', '60%', '70%', '62%', '74%', '83%', '97%', '100%', '29%', '94%', '75%', '82%', '41%', '39%'];
               const teng = gan[Math.floor(Math.random() * gan.length)];
               nuy.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *' + ganteng + '*\n\nJawaban : ' + teng + '', text, { quoted: mek });
               break;
            case 'cantikcek':
            case 'cekcantik':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               cantik = body.slice(11);
               if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??');
               const can = [
                  '10% banyak perawatan ya kak:v\nCanda Perawatan:v',
                  '30% Semangat Kaka Merawat Dirinya><',
                  '20% Semangat Ya Kakak',
                  '40% Wahh Kaka><',
                  '50% kaka cantik deh><',
                  '60% Hai Cantik:v',
                  '70% Hai Ukhty(:',
                  '62% Kakak Cantik><',
                  '74% Kakak ni cantik deh><',
                  '83% Love You Kakak><',
                  '97% Assalamualaikum Ukhty',
                  '100% Kakak Pake Susuk ya??:v',
                  '29% Semangat Kakak:)',
                  '94% Hai Cantik><',
                  '75% Hai Kakak Cantik',
                  '82% wihh Kakak Pasti Sering Perawatan kan??',
                  '41% Semangat:)',
                  '39% Lebih Semangat',
               ];
               const tik = can[Math.floor(Math.random() * can.length)];
               nuy.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *' + cantik + '*\n\nPersen Kecantikan : ' + tik + '', text, { quoted: mek });
               break;
            case 'ownergrup':
            case 'ownergroup':
               nuy.updatePresence(from, Presence.composing);
               options = {
                  text: `Owner Group ini adalah : wa.me/${from.split('-')[0]}`,
                  contextInfo: { mentionedJid: [from] },
               };
               nuy.sendMessage(from, options, text, { quoted: mek });
               break;
            case 'leave':
               if (!isGroup) return reply(mess.only.group);
               if (!isOwner) return reply(mess.only.ownerB);
               anu = await nuy.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId);
               break;
            case 'setname':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               nuy.groupUpdateSubject(from, `${body.slice(9)}`);
               nuy.sendMessage(from, `\`\`\`âœ“Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: mek });
               break;
            case 'setdesc':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               nuy.groupUpdateDescription(from, `${body.slice(9)}`);
               nuy.sendMessage(from, `\`\`\`âœ“Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek });
               break;
            case 'tts':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return nuy.sendMessage(from, 'Kode bahasanya mana kak?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja *${prefix}bahasa*', text, { quoted: mek });
               const gtts = require('./lib/gtts')(args[0]);
               if (args.length < 2) return nuy.sendMessage(from, 'Textnya mana kak?', text, { quoted: mek });
               dtt = body.slice(9);
               ranm = getRandom('.mp3');
               rano = getRandom('.ogg');
               dtt.length > 600
                  ? reply('Textnya kebanyakan kak')
                  : gtts.save(ranm, dtt, function () {
                       exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                          fs.unlinkSync(ranm);
                          buff = fs.readFileSync(rano);
                          if (err) return reply('Gagal kak:(');
                          reply(mess.wait);
                          nuy.sendMessage(from, buff, audio, { quoted: mek, ptt: true });
                          fs.unlinkSync(rano);
                       });
                    });
               await limitAdd(sender);
               break;
            case 'translate':
            case 'translete':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return nuy.sendMessage(from, 'Kode Bahasanya???', text, { quoted: mek });
               if (args.length < 2) return nuy.sendMessage(from, 'Text Yg Mau Di translate??', text, { quoted: mek });
               ts = body.slice(11);
               kode = ts.split('/')[0];
               teks = ts.split('/')[1];
               anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`);
               reply(mess.wait);
               translate = `Text Asli: *${body.slice(11)}*\n\nHasil: *${anu.text}*`;
               nuy.sendMessage(from, translate, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'ts':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return nuy.sendMessage(from, 'Kode Bahasanya???', text, { quoted: mek });
               if (args.length < 2) return nuy.sendMessage(from, 'Text Yg Mau Di translate??', text, { quoted: mek });
               ts = body.slice(4);
               kode = ts.split('/')[0];
               teks = ts.split('/')[1];
               anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`);
               reply(mess.wait);
               ts = `Text Asli: *${body.slice(7)}*\n\nHasil: *${anu.text}*`;
               nuy.sendMessage(from, ts, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'setpp':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               media = await nuy.downloadAndSaveMediaMessage(mek);
               await nuy.updateProfilePicture(from, media);
               reply(mess.wait);
               reply(`\`\`\`âœ“Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`);
               break;
            case 'apakah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               apakah = body.slice(1);
               const apakahh = ['Ya', 'Tidak', 'Ga tau'];
               const kah = apakahh[Math.floor(Math.random() * apakahh.length)];
               nuy.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: mek });
               break;
            case 'rate':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               rate = body.slice(1);
               ratee = ['100%', '95%', '90%', '85%', '80%', '75%', '70%', '65%', '60%', '55%', '50%', '45%', '40%', '35%', '30%', '25%', '20%', '15%', '10%', '5%'];
               const te = ratee[Math.floor(Math.random() * ratee.length)];
               nuy.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '', text, { quoted: mek });
               break;
            case 'watak':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               watak = body.slice(1);
               wa = ['penyayang', 'pemurah', 'Pemarah', 'Pemaaf', 'Penurut', 'Baik', 'baperan', 'Baik Hati', 'penyabar', 'Uwu', 'top deh, pokoknya', 'Suka Membantu'];
               const tak = wa[Math.floor(Math.random() * wa.length)];
               nuy.sendMessage(from, 'Pertanyaan : *' + watak + '*\n\nJawaban : ' + tak, text, { quoted: mek });
               break;
            case 'hobby':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               hobby = body.slice(1);
               hob = [
                  'Memasak',
                  'Membantu Atok',
                  'Mabar',
                  'Nobar',
                  'Sosmed an',
                  'Membantu Orang lain',
                  'Nonton Anime',
                  'Nonton Drakor',
                  'Naik Motor',
                  'Nyanyi',
                  'Menari',
                  'Bertumbuk',
                  'Menggambar',
                  'Foto fotoan Ga jelas',
                  'Maen Game',
                  'Berbicara Sendiri',
               ];
               const by = hob[Math.floor(Math.random() * hob.length)];
               nuy.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, { quoted: mek });
               break;
            case 'bisakah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               bisakah = body.slice(1);
               const bisakahh = ['Bisa', 'Tidak Bisa', 'Ga tau'];
               const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)];
               nuy.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: mek });
               break;
            case 'kapankah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               kapankah = body.slice(1);
               const kapankahh = ['1 Minggu lagi', '1 Bulan lagi', '1 Tahun lagi', '100 tahun lagi', 'gatau', '2030', '1 Jam lagi', '1 Menit lagi'];
               const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)];
               nuy.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: mek });
               break;
            case 'truth':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, { method: 'get' });
               ttrth = `${anu.Dare}`;
               truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`);
               nuy.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: mek });
               await limitAdd(sender);
               break;
            case 'dare':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, { method: 'get' });
               der = `${anu.Dare}`;
               tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`);
               nuy.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n' + der });
               await limitAdd(sender);
               break;
            case 'speed':
            case 'ping':
               const timestamp = speed();
               const latensi = speed() - timestamp;
               nuy.sendMessage(from, `Speed: ${latensi.toFixed(4)} _Second_`, text, { quoted: mek });
               break;
            case 'tagme':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               var nom = mek.participant;
               const tag = {
                  text: `@${nom.split('@s.whatsapp.net')[0]} tag!`,
                  contextInfo: { mentionedJid: [nom] },
               };
               nuy.sendMessage(from, tag, text, { quoted: mek });
               break;
            case 'lirik':
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${body.slice(7)}&apikey=BotWeA`);
               thum = await getBuffer(anu.result.thumb);
               teks = `* LAGU DI TEMUKAN *\n\n*Judul* : ${anu.result.judul}\n*Album* : ${anu.result.album}\n*Public in* : ${anu.result.dipublikasi}\n*Lyrics* : ${anu.result.lirik}`;
               nuy.sendMessage(from, thum, image, { quoted: mek, caption: teks });
               break;
            case 'report':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               const pesan = body.slice(8);
               if (pesan.length > 300) return nuy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: mek });
               var nomor = mek.participant;
               const teks1 = `*[REPORT]*\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${pesan}`;

               var options = {
                  text: teks1,
                  contextInfo: { mentionedJid: [nomor] },
               };
               nuy.sendMessage('6283815956151@s.whatsapp.net', options, text, { quoted: mek });
               reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.');
               break;
            case 'request':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               const cfrr = body.slice(8);
               if (cfrr.length > 300) return nuy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: mek });
               var nomor = mek.participant;
               const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${cfrr}`;

               var options = {
                  text: ress,
                  contextInfo: { mentionedJid: [nomor] },
               };
               nuy.sendMessage('6283815956151@s.whatsapp.net', options, text, { quoted: mek });
               reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.');
               break;
            case 'memeindo':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`);
               buffer = await getBuffer(memein.result);
               nuy.sendMessage(from, buffer, image, { quoted: mek, caption: '.......' });
               await limitAdd(sender);
               break;
            case 'ssweb':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Urlnya mana kak?');
               teks = `${body.slice(7)}`;
               reply(mess.wait);
               anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=tablet&url=${teks}&apiKey=${BarBarApi}`);
               ssweb = await getBuffer(anu.result);
               nuy.sendMessage(from, ssweb, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'neko':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               nuy.updatePresence(from, Presence.composing);
               uk = ['anime neko'];
               nk = uk[Math.floor(Math.random() * uk.length)];
               try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                     method: 'get',
                  });
                  reply(mess.wait);
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek);
                  nuy.sendMessage(from, pok, image, {
                     quoted: mek,
                     caption: `*Neko*`,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'loli':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LOLI`, { method: 'get' });
               naru = JSON.parse(JSON.stringify(anu));
               to = naru[Math.floor(Math.random() * naru.length)];
               nye = await getBuffer(to);
               nuy.sendMessage(from, nye, image, { caption: '*Loli*', quoted: mek });
               await limitAdd(sender);
               break;
            case 'nsfwloli':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limits.limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result.result);
                  nuy.sendMessage(from, buffer, image, { quoted: mek, caption: 'Jangan jadiin bahan buat comli om' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'nsfwblowjob':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result);
                  nuy.sendMessage(from, buffer, image, { quoted: mek, caption: 'Jangan jadiin bahan buat comli om' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'nsfwneko':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result);
                  nuy.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Kak Bokep Nsfw Neko Nya Xixixi' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'nsfwtrap':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result);
                  nuy.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Kak Bokep Nsfw Trap Nya Xixixi' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'hentai':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (!isNsfw) return reply(' *NSFW OF* ');
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, { method: 'get' });
                  buffer = await getBuffer(res.result);
                  nuy.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Kak Bokep Nsfw Hentai Nya Xixixi' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'hilih':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('Teksnya mana kak?');
               anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'chord':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??');
               tels = body.slice(7);
               anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'infogempa':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               buff = await getBuffer(anu.map);
               reply(mess.wait);
               gempa = `•Lokasi *${anu.lokasi}*\n• Waktu: *${anu.waktu}* \n• Potensi: *${anu.potensi}*\n• Magnitude: *${anu.magnitude}*\n• Kedalaman: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`;
               nuy.sendMessage(from, buff, image, { quoted: mek, caption: gempa });
               await limitAdd(sender);
               break;
            case 'kucing':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, { method: 'get' });
               reply(mess.wait);
               buff = await getBuffer(anu.result.url);
               nuy.sendMessage(from, buff, image, { quoted: mek, caption: 'meong🐈' });
               await limitAdd(sender);
               break;

            // only grup fitur anime
            case 'anime':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on Ketik : #modeanime on* ');
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, { method: 'get' });
               reply(mess.wait);
               pok = await getBuffer(anu.result);
               nuy.sendMessage(from, pok, image, { quoted: mek, caption: 'nihhh' });
               await limitAdd(sender);
               break;
            case 'naruto':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, { method: 'get' });
               naru = JSON.parse(JSON.stringify(anu));
               to = naru[Math.floor(Math.random() * naru.length)];
               nye = await getBuffer(to);
               nuy.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'minato':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, { method: 'get' });
               min = JSON.parse(JSON.stringify(anu));
               ato = min[Math.floor(Math.random() * min.length)];
               nye = await getBuffer(ato);
               nuy.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'boruto':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, { method: 'get' });
               bor = JSON.parse(JSON.stringify(anu));
               uto = bor[Math.floor(Math.random() * bor.length)];
               nye = await getBuffer(uto);
               nuy.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'hinata':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, { method: 'get' });
               hina = JSON.parse(JSON.stringify(anu));
               ta = hina[Math.floor(Math.random() * hina.length)];
               nye = await getBuffer(ta);
               nuy.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'sasuke':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, { method: 'get' });
               sasu = JSON.parse(JSON.stringify(anu));
               ke = sasu[Math.floor(Math.random() * sasu.length)];
               nye = await getBuffer(ke);
               nuy.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'sakura':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, { method: 'get' });
               sak = JSON.parse(JSON.stringify(anu));
               kura = sak[Math.floor(Math.random() * sak.length)];
               nye = await getBuffer(kura);
               nuy.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek });
               await limitAdd(sender);
               break;

            case 'kaneki':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, { method: 'get' });
               var ka = JSON.parse(JSON.stringify(anu.result));
               var ne = ka[Math.floor(Math.random() * ka.length)];
               ki = await getBuffer(ne);
               nuy.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'toukachan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, { method: 'get' });
               tou = JSON.parse(JSON.stringify(anu));
               ka = tou[Math.floor(Math.random() * tou.length)];
               nye = await getBuffer(ka);
               nuy.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'rize':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, { method: 'get' });
               ri = JSON.parse(JSON.stringify(anu));
               ze = ri[Math.floor(Math.random() * ri.length)];
               nye = await getBuffer(ze);
               nuy.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'akira':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, { method: 'get' });
               ak = JSON.parse(JSON.stringify(anu));
               ara = ak[Math.floor(Math.random() * ak.length)];
               nye = await getBuffer(ara);
               nuy.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'itori':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, { method: 'get' });
               it = JSON.parse(JSON.stringify(anu));
               ori = it[Math.floor(Math.random() * it.length)];
               nye = await getBuffer(ori);
               nuy.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'kurumi':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, { method: 'get' });
               kur = JSON.parse(JSON.stringify(anu));
               imi = kur[Math.floor(Math.random() * kur.length)];
               nye = await getBuffer(imi);
               nuy.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            case 'miku':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime Ketik : #modeanime on* ');
               reply(mess.wait);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, { method: 'get' });
               mi = JSON.parse(JSON.stringify(anu));
               ku = mi[Math.floor(Math.random() * mi.length)];
               nye = await getBuffer(ku);
               nuy.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek });
               await limitAdd(sender);
               break;
            // akhir fitur anime

            case 'anjing':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, { method: 'get' });
               reply(mess.wait);
               n = JSON.parse(JSON.stringify(anu));
               nimek = n[Math.floor(Math.random() * n.length)];
               pok = await getBuffer(nimek);
               nuy.sendMessage(from, pok, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'resepmasakan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(14)}`, { method: 'get' });
               masak = '==============================\n';
               for (let msk of anu.results) {
                  masak += `• *Title:* ${msk.title}\n• *• *Durasi Masak Sekitar:* ${msk.times}\n• *Porsi:* ${msk.serving}\n• *Tingkat Kesulitan:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`;
               }
               reply(masak.trim());
               await limitAdd(sender);
               break;
            case 'cersex':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               sex = await getBuffer(anu.result.image);
               reply(mess.wait);
               cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`;
               nuy.sendMessage(from, sex, image, { quoted: mek, caption: cerita });
               await limitAdd(sender);
               break;
            case 'randomkpop':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzApi}`, { method: 'get' });
               buff = await getBuffer(anu.result);
               nuy.sendMessage(from, buff, image, { quoted: mek });
               break;
            case 'puisiimg':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, { method: 'get' });
               nuy.sendMessage(from, pus, image, { quoted: mek });
               break;
            case 'playstore':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               ps = `${body.slice(11)}`;
               anu = await fetchJson(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, { method: 'get' });
               store = '======================\n';
               for (let ply of anu.result) {
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* ${ply.url}\n=====================\n`;
               }
               reply(store.trim());
               break;
            case 'pornhub':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('teksnya mana kak?');
               teks = body.slice(9);
               anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, { method: 'get' });
               teks = `===============\n`;
               for (let bokep of anu.result) {
                  teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'nekopoi':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('teksnya mana kak?');
               teks = body.slice(9);
               anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, { method: 'get' });
               teks = `===============\n`;
               for (let neko of anu.result) {
                  teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'xvideos':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('teksnya mana kak?');
               anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, { method: 'get' });
               teks = `===============\n`;
               for (let b of anu.result) {
                  teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;

            case 'fb':
               nuy.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('Urlnya mana kak?');
               if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv);
               reply(mess.wait);
               anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               nuy.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google kak Biar Bisa Didownload', text, { quoted: mek });
               efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`;
               tefbe = await getBuffer(anu.thumb);
               nuy.sendMessage(from, tefbe, image, { quoted: mek, caption: efbe });
               buffer = await getBuffer(anu.result);
               nuy.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek, caption: 'Nih kak' });
               await limitAdd(sender);
               break;
            case 'instaimg':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv);
               anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, { method: 'get' });
               insta = getBuffer(anu.result);
               reply(mess.wait);
               nuy.sendMessage(from, insta, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'bass':
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await nuy.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  nuy.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
            case 'instavid':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv);
               anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, { method: 'get' });
               insta = getBuffer(anu.result);
               reply(mess.wait);
               nuy.sendMessage(from, insta, video, { mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek });
               await limitAdd(sender);
               break;
            case 'instastory':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (args.length < 1) return reply('username??');
               if (isLimit(sender)) return reply(limitend(pushname2));
               instor = `${body.slice(12)}`;
               anu = await fetchJson(`https://api.vhtear.com/igstory?query=${instor}&apikey=${VthearApi}`, { method: 'get' });
               insta = '=========================\n';
               for (let i of anu.result.story.itemlist) {
                  insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`;
               }
               reply(insta.trim());
               await limitAdd(sender);
               break;
            case 'hekerbucin':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               hasil = hekerbucin[Math.floor(Math.random() * hekerbucin.length)];
               nuy.sendMessage(from, '*' + hasil + '*', text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'ytsearch':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Yang mau di cari apaan? titit?');
               anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               teks = '=================\n';
               for (let i of anu.result) {
                  teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`;
               }
               reply(teks.trim());
               break;
            case 'tiktok':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Urlnya mana um?');
               if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv);
               reply(mess.wait);
               anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               buffer = await getBuffer(anu.result);
               nuy.sendMessage(from, buffer, video, { quoted: mek });
               break;

            case 'film':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Mau Cari Film Apa?');
               reply(mess.wait);
               anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, { method: 'get' });
               hasil = '=========================\n';
               for (let film of anu.Search) {
                  hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`;
               }
               reply(hasil.trim());
               await limitAdd(sender);
               break;
            case 'tiktokstalk':
               try {
                  if (isBanned) return reply(mess.only.benned);
                  if (!isUser) return reply(mess.only.userB);

                  if (isLimit(sender)) return reply(limitend(pushname2));
                  if (args.length < 1) return nuy.sendMessage(from, 'Usernamenya mana kak?', text, { quoted: mek });
                  let { user, stats } = await tiktod.getUserProfileInfo(args[0]);
                  reply(mess.wait);
                  teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`;
                  buffer = await getBuffer(user.avatarLarger);
                  nuy.sendMessage(from, buffer, image, { quoted: mek, caption: teks });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply('Kemungkinan username tidak valid');
               }
               await limitAdd(sender);
               break;
            //creator
            case 'nulis':
            case 'tulis':
               nuy.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`);
               reply(mess.wait);
               tulis = body.slice(7);
               nama = tulis.split('/')[0];
               kelas = tulis.split('/')[1];
               isi = tulis.split('/')[2];
               nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, { method: 'get' });
               nuy.sendMessage(from, nulis, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'ttp':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('*Textnya mana om?*');
               ranp = getRandom('.png');
               rano = getRandom('.webp');
               teks = body.slice(5).trim();
               anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               reply(mess.wait);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  bufferhgf = fs.readFileSync(rano);
                  nuy.sendMessage(from, bufferhgf, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;

            case 'slide':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('*Textnya mana kak?*');
               teks = `${body.slice(7)}`;
               atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, { method: 'get' });
               reply(mess.wait);
               nuy.sendMessage(from, atytyd, video, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'quotemaker':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               gh = `${body.slice(12)}`;
               quote = gh.split('/')[0];
               wm = gh.split('/')[1];
               bg = gh.split('/')[2];
               const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`;
               if (args.length < 1) return reply(pref);
               anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, { method: 'get' });
               buffer = await getBuffer(anu.result);
               nuy.sendMessage(from, buffer, image, { quoted: mek });
               await limitAdd(sender);
               break;

            //akhir kreator
            case 'jarak':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               jarak = `${body.slice(7)}`;
               ja = jarak.split('/')[0];
               rak = jarak.split('/')[1];
               anu = await fetchJson(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result.data}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'infoalamat':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result.data}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'tinyurl':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`);
               tinyurl = `${anu.result}`;
               reply(tinyurl);
               await limitAdd(sender);
               break;
            case 'infonomor':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`);
               infonomor = `*nomor* \n${anu.nomor} *international* \n${anu.international}`;
               reply(infonomor);
               await limitAdd(sender);
               break;
            case 'igstalk':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${body.slice(9)}&apikey=${VthearApi}`, { method: 'get' });
               buffer = await getBuffer(anu.result.picture);
               reply(mess.wait);
               hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Jumlah Postingan: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`;
               nuy.sendMessage(from, buffer, image, { quoted: mek, caption: hasil });
               await limitAdd(sender);
               break;
            case 'mimpi':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               reply(mess.wait);
               anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, { method: 'get' });
               mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result.hasil}`;
               nuy.sendMessage(from, mimpi, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'quotes':
               nuy.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               data = fs.readFileSync('./nuy/quotes.js');
               jsonData = JSON.parse(data);
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               randQuote = 'Author: *' + randKey.author + '*\n\n*' + randKey.quotes + '*';
               nuy.sendMessage(from, randQuote, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'fakta':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/faktaunik`, { method: 'get' });
               fakta = `Faktanya: *${anu.result}*`;
               nuy.sendMessage(from, fakta, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'katabijak':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, { method: 'get' });
               katabijak = `Kata Bijak: *${anu.result}*`;
               nuy.sendMessage(from, katabijak, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'profiltiktok':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, { method: 'get' });
               tiktok = await getBuffer(anu.result.picture);
               nuy.sendMessage(from, tiktok, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'closetime':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               nuy.updatePresence(from, Presence.composing);
               if (args[1] == 'detik') {
                  var timer = args[0] + '000';
               } else if (args[1] == 'menit') {
                  var timer = args[0] + '0000';
               } else if (args[1] == 'jam') {
                  var timer = args[0] + '00000';
               } else {
                  return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik');
               }
               setTimeout(() => {
                  var nomor = mek.participant;
                  const close = {
                     text: `*tepat ᴡaktu* grup ditutup oleh admin @${nomor.split('@s.whatsapp.net')[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
                     contextInfo: { mentionedJid: [nomor] },
                  };
                  nuy.groupSettingChange(from, GroupSettingChange.messageSend, true);
                  reply(close);
               }, timer);
               break;
            case 'darkjokes':
               nuy.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               reply(mess.wait);
               data = fs.readFileSync('./nuy/drak.js');
               jsonData = JSON.parse(data);
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               darkjokes = await getBuffer(randKey.result);
               nuy.sendMessage(from, darkjokes, image, { quoted: mek, caption: '```DARK JOKES```' });
               await limitAdd(sender);
               break;
            case 'katailham':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               hasil = katailham[Math.floor(Math.random() * katailham.length)];
               nuy.sendMessage(from, '*' + hasil + '*', text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'addsticker':
               if (!isOwner) return reply(mess.only.ownerB);
               if (!isQuotedSticker) return reply('Reply stiker nya');
               svst = body.slice(12);
               if (!svst) return reply('Nama sticker nya apa?');
               boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               delb = await nuy.downloadMediaMessage(boij);
               fs.writeFileSync(`./sticker/${svst}.webp`, delb);
               nuy.sendMessage(from, `Berhasil menyimpan sticker!`, MessageType.text, { quoted: mek });
               break;
            case 'addaudio':
               if (!isOwner) return reply(mess.only.ownerB);
               if (!isQuotedAudio) return reply('Reply audio nya om');
               gsh = body.slice(7);
               if (!gsh) return reply('Nama file nya apa?');
               uyw = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               gx = await nuy.downloadMediaMessage(uyw);
               fs.writeFileSync(`./mp3/${gsh}.mp3`, gx);
               reply('Berhasil menyimpan audio!');
               break;
            case 'katacinta':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, { method: 'get' });
               katacin = `*${anu.result}*`;
               nuy.sendMessage(from, katacin, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'pasangan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               pa = `${body.slice(10)}`;
               sa = pa.split('/')[0];
               ngan = pa.split('/')[1];
               anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${VthearApi}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result.hasil}`, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'persengay':
            case 'gaypersen':
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('tag temanmu!');
               rate = body.slice(11);
               persengayy = [
                  '*4%*\n\n*Tobat Ngegay kak:v*',
                  '*9%*\n\n*OTW Tobat kak:v*',
                  '*17%*\n\n*Kang Coli*',
                  '*28%*\n\n*Buset Dah GayðŸ¤¦*',
                  '*34%*\n\n *Korban Tusbol*',
                  '*48%*\n\n*Kang Hunter Bool:v*',
                  '*59%*\n\n *Bahaya Ni Orang kak*',
                  '*62%*\n\n*HatiÂ² Sama Ni Orang Beneran Dah*',
                  '*74%*\n\n*Astagfirullah Kabur kakðŸƒðŸŒ¬ï¸*',
                  '83%\n\n Yaallah NakðŸ¤¦',
                  '97%\n\nAstagfirullahðŸ¤¦',
                  '100%\n\nKabur ae kak Daripada Ditusbol Bool luðŸƒ',
                  '29%\n\n amann:v',
                  '94%\n\n YaallahðŸƒ',
                  '75%\n\nHadehh GayðŸ¤¦',
                  '82%\n\nMending Lu Tobat DahðŸƒ',
                  '41%\n\nSering Cari Bool Diperempatan',
                  '39%\n\nSering Tusbol Bool TopanðŸƒ',
               ];
               const kl = persengayy[Math.floor(Math.random() * persengayy.length)];
               nuy.sendMessage(from, 'Persen Gay: *' + rate + '*\n\nJawaban : ' + kl + '', text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'pbucin':
            case 'persenbucin':
            case 'bucinpersen':
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Mana Nama?');
               rate = body.slice(8);
               persenbucin = [
                  '4%\n\nHadehhðŸ¤¦',
                  '9%\n\nMasih Kecil Dah Bucin Ae',
                  '17%\n\nNakk Masih Kecil',
                  '28%\n\nYoalahh hmm',
                  '34%\n\nMayan Lah',
                  '48%\n\nGatau',
                  '59%\n\nBiasa Kang Bucin',
                  '62%\n\n HadehhhðŸƒ',
                  '74%\n\n bucen Teroosss',
                  '83%\n\n SekaliÂ² kek Ga bucin Gitu',
                  '97%\n\nHadehh PakboiÂ²',
                  '100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi',
                  '29%\n\nKasian Mana Masih Muda',
                  '94%\n\n Dasar Pakboi',
                  '75%\n\n Ya Ampun',
               ];
               const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)];
               nuy.sendMessage(from, 'Persen Bucin Kak: *' + rate + '*\n\nJawaban : ' + pbucin + '', text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'map':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('Masukan nama daerah');
               daerah = body.slice(5);
               try {
                  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`);
                  reply(mess.wait);
                  hasil = await getBuffer(data.gambar);
                  nuy.sendMessage(from, hasil, image, {
                     quoted: mek,
                     caption: `Hasil Dari *${daerah}*`,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'url2img':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               tipelist = ['desktop', 'tablet', 'mobile'];
               if (args.length < 1) return reply('Tipenya apa kak?');
               if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile');
               if (args.length < 2) return reply('Urlnya mana kak?');
               if (!isUrl(args[1])) return reply(mess.error.Iv);
               reply(mess.wait);
               anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               url2img = await getBuffer(anu.result);
               nuy.sendMessage(from, url2img, image, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'tagall':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               members_id = [];
               teks = args.length > 1 ? body.slice(8).trim() : '';
               teks += '\n';
               for (let mem of groupMembers) {
                  teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`;
                  members_id.push(mem.jid);
               }
               mentions(`╔═══✪ Tag By *${pushname2}* ✪══` + teks + '╚═══〘 Mc-Bot 〙═══', members_id, true);
               break;
            case 'mentionall':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               members_id = [];
               teks = '\n';
               for (let mem of groupMembers) {
                  teks += `╠➥ @${mem.jid.split('@')[0]}\n`;
                  members_id.push(mem.jid);
               }
               mentions(`╔══〘  *${body.slice(12)}*  〙✪══` + teks + '╚═〘 Mc-Bot 〙', members_id, true);
               break;
            case 'kbbi':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               if (args.length < 1) return reply('Apa yang mau dicari kak?');
               anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, { method: 'get' });
               reply('Menurut Kbbi:\n\n' + anu.result);
               await limitAdd(sender);
               break;
            case 'grup':
            case 'gc':
            case 'group':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (args[0] === 'buka') {
                  reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`);
                  nuy.groupSettingChange(from, GroupSettingChange.messageSend, false);
               } else if (args[0] === 'tutup') {
                  reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`);
                  nuy.groupSettingChange(from, GroupSettingChange.messageSend, true);
               }
               break;
            case 'artinama':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Apa yang mau dicari kak?');
               anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, { method: 'get' });
               nuy.sendMessage(from, anu.result, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'clearall':
               if (!isOwner) return reply('Kamu siapa?');
               anu = await nuy.chats.all();
               nuy.setMaxListeners(25);
               for (let _ of anu) {
                  nuy.deleteChat(_.jid);
               }
               reply(`\`\`\`Sukses delete all chat Mc-Bot\`\`\``);
               break;
            case 'bcgc':
               nuy.updatePresence(from, Presence.composing);
               if (!isOwner) return reply(mess.only.ownerB);
               if (args.length < 1) return reply('.......');
               if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  bcgc = await nuy.downloadMediaMessage(encmedia);
                  for (let _ of groupMembers) {
                     nuy.sendMessage(_.jid, bcgc, image, { caption: `「 *_broadᴄast group_* 」\n*group* : ${groupName}\n\n${body.slice(6)}` });
                  }
                  reply('');
               } else {
                  for (let _ of groupMembers) {
                     sendMess(_.jid, `「 *_broadᴄast group_* 」\n*group* : ${groupName}\n\n${body.slice(6)}`);
                  }
                  reply('Suksess broadcast group');
               }
               break;
            case 'bc':
               if (!isOwner) return reply('Kamu siapa?');
               if (args.length < 1) return reply('.......');
               anu = await nuy.chats.all();
               if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  bc = await nuy.downloadMediaMessage(encmedia);
                  for (let _ of anu) {
                     nuy.sendMessage(_.jid, bc, image, { caption: `「 *_broadᴄast_* 」\n\n${body.slice(4)}` });
                  }
                  nuy.sendMessage(_.jid, bc, image, { caption: `「 *_broadᴄast_* 」\n\n${body.slice(4)}` });
                  reply('Suksess broadcast');
               } else {
                  for (let _ of anu) {
                     sendMess(_.jid, `「 *_broadᴄast_* 」\n\n${body.slice(4)}`);
                  }
                  reply('Suksess broadcast');
               }
               break;
            case 'add':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (args.length < 1) return reply('Yang mau di add siapa??');
               if (args[0].startsWith('08')) return reply('Gunakan kode negara kak');
               try {
                  num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`;
                  nuy.groupAdd(from, [num]);
               } catch (e) {
                  console.log('Error :', e);
                  reply('Gagal menambahkan target, mungkin karena di private');
               }
               break;
            case 'kick':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, mengeluarkan :\n';
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`;
                  }
                  mentions(teks, mentioned, true);
                  nuy.groupRemove(from, mentioned);
               } else {
                  mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true);
                  nuy.groupRemove(from, mentioned);
               }
               break;
            case 'kicktime':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               setTimeout(() => {
                  nuy.sendMessage(from, 'Yok Sama² Al-fatihah', text);
               }, 8000);
               setTimeout(() => {
                  reply('sukses min:D');
               }, 7000);
               setTimeout(() => {
                  nuy.groupRemove(from, mentioned);
               }, 6000);
               setTimeout(() => {
                  nuy.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text); // ur cods
               }, 5000);
               setTimeout(() => {
                  nuy.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text);
               }, 2500);
               setTimeout(() => {
                  reply('Perintah Diterima min:D');
               }, 0);
               break;
            case 'promote':
            case 'pm':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, anda menjdi admin :\n';
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`;
                  }
                  mentions(teks, mentioned, true);
                  nuy.groupMakeAdmin(from, mentioned);
               } else {
                  mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true);
                  nuy.groupMakeAdmin(from, mentioned);
               }
               break;
            case 'delete':
            case 'del':
            case 'd':
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               nuy.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true });
               break;
            case 'demote':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
               if (mentioned.length > 1) {
                  teks = 'Perintah di terima, anda tidak menjadi admin :\n';
                  for (let _ of mentioned) {
                     teks += `@${_.split('@')[0]}\n`;
                  }
                  mentions(teks, mentioned, true);
                  nuy.groupDemoteAdmin(from, mentioned);
               } else {
                  mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true);
                  nuy.groupDemoteAdmin(from, mentioned);
               }
               break;
            case 'listadmins':
            case 'listadmin':
            case 'adminlist':
            case 'adminslist':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`;
               no = 0;
               for (let admon of groupAdmins) {
                  no += 1;
                  teks += `[${no.toString()}] @${admon.split('@')[0]}\n`;
               }
               mentions(teks, groupAdmins, true);
               break;
            case 'toimg':
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isQuotedSticker) return reply(' reply stickernya kak');
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await nuy.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.png');
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media);
                  if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ');
                  buffer = fs.readFileSync(ran);
                  nuy.sendMessage(from, buffer, image, { quoted: mek, caption: 'nihhh' });
                  fs.unlinkSync(ran);
               });
               await limitAdd(sender);
               break;
            case 'simih':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Hmmmm');
               if (args[0] === 'on') {
                  if (isSimi) return reply('Mode simi sudah aktif');
                  samih.push(from);
                  fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih));
                  reply(`\`\`\`Sukses mengaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  samih.splice(from, 1);
                  fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih));
                  reply(`\`\`\`âœ“Sukes menonaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('On untuk mengaktifkan, Off untuk menonaktifkan');
               }
               break;
            case 'nsfw':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Hmmmm');
               if (args[0] === 'on') {
                  if (isNsfw) return reply('Mode nsfw sudah aktif');
                  nsfw.push(from);
                  fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw));
                  reply(`\`\`\`✓“Sukses mengaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  nsfw.splice(from, 1);
                  fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw));
                  reply(`\`\`\`✓“Sukes menonaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('On untuk mengaktifkan, Off untuk menonaktifkan');
               }
               break;
            case 'modeanime':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Hmmmm');
               if (args[0] === 'on') {
                  if (isAnime) return reply('Mode anime sudah aktif');
                  anime.push(from);
                  fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime));
                  reply(`\`\`\`✓“Sukses mengaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  anime.splice(from, 1);
                  fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime));
                  reply(`\`\`\`✓“Sukes menonaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('On untuk mengaktifkan, Off untuk menonaktifkan');
               }
               break;
            case 'welcome':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Hmmmm');
               if (args[0] === 'on') {
                  if (isWelkom) return reply('Udah aktif kak');
                  welkom.push(from);
                  fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom));
                  reply(`\`\`\`✓“Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  welkom.splice(from, 1);
                  fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom));
                  reply(`\`\`\`✓“Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('On untuk mengaktifkan, Off untuk menonaktifkan');
               }
               break;
            case 'antilink':
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin);
               if (args.length < 1) return reply('ketik #antilink on untuk mengaktifkan');
               if (args[0] === 'on') {
                  if (isAntiLink) return reply('anti link sudah on');
                  antilink.push(from);
                  fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink));
                  reply(`\`\`\`✓“Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  if (!isAntiLink) return reply('anti link sudah off');
                  antilink.splice(from, 1);
                  fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink));
                  reply(`\`\`\`✓“Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply('on untuk mengaktifkan, off untuk menonaktifkan');
               }
               break;
            case 'antibadword':
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan');
               if (args[0] === 'on') {
                  if (isBadWord) return reply('anti badword sudah on');
                  badword.push(from);
                  fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword));
                  reply(`\`\`\`✓“Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`);
               } else if (args[0] === 'off') {
                  if (!isBadWord) return reply('anti badword sudah off');
                  badword.splice(from, 1);
                  fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword));
                  reply(`\`\`\`✓“Sukses menonaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`);
               } else {
                  reply(ind.satukos());
               }
               break;
            case 'addbadword':
               if (!isOwner) return reply(mess.only.ownerB);
               if (args.length < 1) return reply(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`);
               const bw = body.slice(12);
               bad.push(bw);
               fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad));
               reply('Success Menambahkan Bad Word!');
               break;
            case 'delbadword':
               if (!isOwner) return reply(mess.only.ownerB);
               if (args.length < 1) return reply(`Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`);
               let dbw = body.slice(12);
               bad.splice(dbw);
               fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad));
               reply('Success Menghapus BAD WORD!');
               break;
            case 'listbadword':
               let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`;
               for (let i of bad) {
                  lbw += `➸ ${i.replace(bad)}\n`;
               }
               await reply(lbw);
               break;
            case 'caklontong':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, { method: 'get' });
               caklontong = `*${anu.result.soal}*`;
               setTimeout(() => {
                  nuy.sendMessage(from, '*➸ Jawaban :* ' + anu.result.jawaban + '\n\n• Penjelasan: *' + anu.result.desk + '*', text, { quoted: mek }); // ur cods
               }, 30000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_10 Detik lagi…_', text); // ur cods
               }, 20000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_20 Detik lagi_…', text); // ur cods
               }, 10000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_30 Detik lagi_…', text); // ur cods
               }, 2500); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, caklontong, text, { quoted: mek }); // ur cods
               }, 0); // 1000 = 1s,
               await limitAdd(sender);
               break;
            case 'tebakgambar':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, { method: 'get' });
               bufferkkk = await getBuffer(anu.result.soal_gbr);
               setTimeout(() => {
                  nuy.sendMessage(from, '*➸ Jawaban :* ' + anu.result.jawaban, text, { quoted: mek }); // ur cods
               }, 30000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_10 Detik lagi…_', text); // ur cods
               }, 20000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_20 Detik lagi_…', text); // ur cods
               }, 10000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_30 Detik lagi_…', text); // ur cods
               }, 2500); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }); // ur cods
               }, 0); // 1000 = 1s,
               await limitAdd(sender);
               break;
            case 'family100':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, { method: 'get' });
               family = `*${anu.result.soal}*`;
               setTimeout(() => {
                  nuy.sendMessage(from, '*➸ Jawaban :* ' + anu.result.jawaban, text, { quoted: mek }); // ur cods
               }, 30000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_10 Detik lagi…_', text); // ur cods
               }, 20000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_20 Detik lagi_…', text); // ur cods
               }, 10000); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, '_30 Detik lagi_…', text); // ur cods
               }, 2500); // 1000 = 1s,
               setTimeout(() => {
                  nuy.sendMessage(from, family, text, { quoted: mek }); // ur cods
               }, 0); // 1000 = 1s,
               await limitAdd(sender);
               break;
            case 'randombokep':
               nuy.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               data = fs.readFileSync('./nuy/18.js');
               jsonData = JSON.parse(data);
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               randBokep = await getBuffer(randKey.image);
               reply(mess.wait);
               randTeks = randKey.teks;
               nuy.sendMessage(from, randBokep, image, { quoted: mek, caption: randTeks });
               await limitAdd(sender);
               break;

            case 'clone':
               if (!isOwner) return reply(mess.only.ownerB);
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (args.length < 1) return reply('Tag target yang ingin di clone');
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag kak');
               mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
               let { jid, id, notify } = groupMembers.find((x) => x.jid === mentioned);
               try {
                  pp = await nuy.getProfilePicture(id);
                  buffer = await getBuffer(pp);
                  nuy.updateProfilePicture(botNumber, buffer);
                  mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true);
               } catch (e) {
                  reply('Gagal om');
               }
               break;
            //setting bot
            case 'setprefix':
            case 'setpref':
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               prefix = args[0];
               reply(`Prefix berhasil di ubah menjadi : ${prefix}`);
               break;
            case 'setlimit':
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               limitt = args[0];
               reply(`Limit berhasil di ubah menjadi : ${limitt}`);
               break;
            case 'setmemlimit':
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               memberLimit = args[0];
               reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`);
               break;
            case 'setnamebot':
               if (args.length < 1) return;
               if (!isOwner) return reply(mess.only.ownerB);
               name = body.slice(12);
               reply(`Nama Bot berhasil di ubah menjadi : ${name}`);
               break;
            case 'setreply':
               if (!isOwner) return reply(mess.only.ownerB);
               nuy.updatePresence(from, Presence.composing);
               if (args.length < 1) return;
               rmenu = body.slice(10);
               reply(`reply berhasil di ubah menjadi : ${rmenu}`);
               break;
            ////////////
            case 'wait':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
                  reply(mess.wait);
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
                  media = await nuy.downloadMediaMessage(encmedia);
                  await wait(media)
                     .then((res) => {
                        nuy.sendMessage(from, res.video, video, { quoted: mek, caption: res.teks.trim() });
                     })
                     .catch((err) => {
                        reply(err);
                     });
               } else {
                  reply('Foto aja mas');
               }
               break;

            case 'quran':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, { method: 'get' });
               quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`;
               nuy.sendMessage(from, quran, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'infocuaca':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text);
               reply(mess.wait);
               tempat = `${body.slice(11)}`;
               weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah=' + tempat, { method: 'get' });
               if (weather.error) {
                  reply(from, weather.error, text);
               } else {
                  nuy.sendMessage(
                     from,
                     `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`,
                     text,
                     { quoted: mek }
                  );
               }
               await limitAdd(sender);
               break;

            case 'pinterest':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Mau Nyari Foto Apa???');
               pinte = body.slice(11);
               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, { method: 'get' });
               reply(mess.wait);
               var pin = JSON.parse(JSON.stringify(anu.result));
               var trest = pin[Math.floor(Math.random() * pin.length)];
               pinehg = await getBuffer(trest);
               nuy.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : ' + pinte + '*', quoted: mek });
               await limitAdd(sender);
               break;

            case 'jadwalsholat':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('Masukan nama daerah!!');
               sholat = `${body.slice(14)}`;
               anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${sholat}&apiKey=${BarBarApi}`, { method: 'get' });
               reply(mess.wait);
               if (anu.result) return reply(anu.result);
               jsol = `Jadwal sholat di *${sholat}* hari ini adalah\n\nâž¸ *Subuh :* ${anu.Subuh} WIB\n*âž¸ Dzuhur :* ${anu.Dzuhur} WIB\n*âž¸ Ashar :* ${anu.Ashar} WIB\n*âž¸ Maghrib :* ${anu.Maghrib} WIB\n*âž¸ Isya :* ${anu.Isya} WIB`;
               nuy.sendMessage(from, jsol, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'jadwaltvnow':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               nuy.updatePresence(from, Presence.composing);
               reply(mess.wait);
               try {
                  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
                     method: 'get',
                  });
                  reply(anu.result.jadwalTV);
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'jadwaltv':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               ch = body.slice(10);
               if (args.length < 1) return reply('Masukan nama channel');
               nuy.updatePresence(from, Presence.composing);
               reply(mess.wait);
               try {
                  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarApi}`, {
                     method: 'get',
                  });
                  n = JSON.parse(JSON.stringify(anu.result));
                  hasil = `*Jadwal Tv* : ${ch} hari ini\n${n}`;
                  reply(hasil);
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;

            // premium user
            case 'joox':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               infomp3 = `╭─「 *JOOX DOWNLOADER* 」\n│\n│ *• Judul* : ${anu.result.judul}\n│ *• Album* : ${anu.result.album}\n│ *• Dipublikasi* : ${anu.result.dipublikasi}\n│\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM*\n╰─────────────────────`;
               bufferddd = await getBuffer(anu.result.thumb);
               reply(mess.wait);
               buff = await getBuffer(anu.result.mp3);
               nuy.sendMessage(from, bufferddd, image, { quoted: mek, caption: infomp3 });
               nuy.sendMessage(from, buff, audio, { mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek });
               await limitAdd(sender);
               break;

            case 'snack':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (args.length < 1) return reply('Urlnya mana kak?');
               if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv);
               anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`;
               bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png');
               reply(mess.wait);
               buff = await getBuffer(anu.result);
               nuy.sendMessage(from, bufferddd, image, { quoted: mek, caption: sck });
               nuy.sendMessage(from, buff, video, { mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek });
               await limitAdd(sender);
               break;

            case 'ytmp4':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('Urlnya mana kak?');
               if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(mess.error.Iv);
               anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VthearApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               ytt = `╭─「 *YOUTUBE MP4 DOWNLOADER* 」\n│\n│• *Title:* ${anu.result.title}\n│• *Size:* ${anu.result.size}\n│• *Link:* https://www.youtu.be/${anu.result.id}\n│\n│ Tunggu Sebentar 1 menit Mungkin Agak Lama \n│ Karna Mendownload Video\n╰─────────────────────`;
               buff = await getBuffer(anu.result.imgUrl);
               reply(mess.wait);
               buffer = await getBuffer(anu.result.UrlVideo);
               nuy.sendMessage(from, buff, image, { quoted: mek, caption: ytt });
               nuy.sendMessage(from, buffer, video, { mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek, caption: 'Nih kak' });
               await limitAdd(sender);
               break;

            case 'ytmp3':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('Urlnya mana kak?');
               if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv);
               anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VthearApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               yta = `╭─「 *YOUTUBE MP3 DOWNLOADER* 」\n│\n│• *Title:* ${anu.result.title}\n│• *Size:* ${anu.result.size}\n│• *Link:* https://www.youtu.be/${anu.result.id}\n│\n│ Tunggu Sebentar 1 menit Mungkin Agak Lama \n│ Karna Mendownload Video\n╰─────────────────────`;
               buff = await getBuffer(anu.result.imgUrl);
               reply(mess.wait);
               buffer = await getBuffer(anu.result.UrlMp3);
               nuy.sendMessage(from, buff, image, { quoted: mek, caption: yta });
               nuy.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: 'Nih kak' });
               await limitAdd(sender);
               break;

            case 'play':
            case 'playmp3':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               data = await fetchJson(`https://videfikri.com/api/ytplay/?query=${body.slice(6)}`, { method: 'get' });
               reply(mess.wait);
               infomp3 = ` *PLAY* \n*Judul* : ${data.result.title}\n*Duration* : ${data.result.duration}\n*Filesize* : ${data.result.size}\n\n*[ WAIT ] Audionya Sedang Dikirim....*`;
               bufferddd = await getBuffer(data.result.image);
               lagu = await getBuffer(data.result.mp3);
               nuy.sendMessage(from, bufferddd, image, { quoted: mek, caption: infomp3 });
               nuy.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek });
               break;

            case 'smule':
               if (isBanned) return reply(mess.only.benned);

               if (!isUser) return reply(mess.only.userB);
               if (args.length < 1) return reply('Urlnya mana kak?');
               if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv);
               reply(mess.wait);
               anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`;
               thumb = await getBuffer(anu.thumb);
               nuy.sendMessage(from, thumb, image, { quoted: mek, caption: teks });
               buffer = await getBuffer(anu.result);
               nuy.sendMessage(from, buffer, video, { mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih kak' });
               await limitAdd(sender);
               break;

            // Akhir Fitur Premium

            case 'asupan':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               try {
                  data = await fetchJson(`https://api.itsmeikyxsec404.xyz/asupan?apikey=itsmeiky633`);
                  reply(mess.wait);
                  hasil = await getBuffer(data.result);
                  nuy.sendMessage(from, hasil, video, {
                     caption: 'Nih kak',
                     quoted: mek,
                  });
                  await limitAdd(sender);
               } catch {
                  reply(mess.wait);
               }
               break;
            case 'wiki':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               if (args.length < 1) return reply('teks nya mana om?');
               reply(mess.wait);
               wiki = `${body.slice(6)}`;
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=${TobzApi}`, { method: 'get' });
               if (anu.error) return reply(anu.error);
               wikii = `${anu.result}`;
               nuy.sendMessage(from, wikii, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'pastebin':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               paste = `${body.slice(10)}`;
               anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'bpfont':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               bp = `${body.slice(8)}`;
               anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, { method: 'get' });
               reply(anu.text);
               await limitAdd(sender);
               break;
            case 'spamcall':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               call = `${body.slice(11)}`;
               anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result.logs}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'spamgmail':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               spam = `${body.slice(10)}`;
               anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result.log_lengkap}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'quransurah':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               surah = `${body.slice(12)}`;
               anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`);
               quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`;
               for (let surah of anu.ayat) {
                  quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`;
               }
               reply(quran.trim());
               await limitAdd(sender);
               break;
            case 'quranlist':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               anu = await fetchJson(`https://api.vhtear.com/quranlist?&apikey=${VthearApi}`, { method: 'get' });
               list = '';
               for (let sur of anu) {
                  list = `Nomer: ${sur.list}\n`;
               }
               reply(list.trim());
               break;
            case 'bitly':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               link = `${body.slice(7)}`;
               anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, { method: 'get' });
               bitly = `${bitlyy.result}`;
               nuy.sendMessage(from, anu, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'textstyle':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               style = `${body.slice(11)}`;
               anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, { method: 'get' });
               reply(anu.result);
               await limitAdd(sender);
               break;
            case 'pantun':
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'jamdunia':
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               reply(mess.wait);
               jamdunia = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, { method: 'get' });
               wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`;
               nuy.sendMessage(from, wtime, text, { quoted: mek });
               await limitAdd(sender);
               break;

            case 'tomp3':
               if (isBanned) return reply(mess.only.benned);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (!isUser) return reply(mess.only.userB);

               nuy.updatePresence(from, Presence.composing);
               if (!isQuotedVideo) return reply('_*Reply Video nya kak!*_');
               reply(mess.wait);
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await nuy.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp4');
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Gagal, pada saat mengkonversi video ke mp3');
                  bufferlkj = fs.readFileSync(ran);
                  nuy.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: mek });
                  fs.unlinkSync(ran);
               });
               await limitAdd(sender);
               break;
            case 'tomp4':
               nuy.updatePresence(from, Presence.composing);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (!isQuotedSticker) return reply('Reply stikernya');
               reply(mess.wait);
               anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               anum = await nuy.downloadAndSaveMediaMessage(anumedia);
               ran = getRandom('.webp');
               exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
                  fs.unlinkSync(anum);
                  if (err) return reply('Gagal, pada saat mengkonversi sticker ke Video');
                  buffer = fs.readFileSync(ran);
                  nuy.sendMessage(from, buffer, video, {
                     quoted: mek,
                     caption: 'Nih Kak',
                  });
                  fs.unlinkSync(ran);
               });
               break;

            case 'setppbot':
               if (!isOwner) return reply(mess.only.owner);
               nuy.updatePresence(from, Presence.composing);
               if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`);
               enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await nuy.downloadAndSaveMediaMessage(enmedia);
               await nuy.updateProfilePicture(botNumber, media);
               reply('Makasih profil barunya☺️™‚');
               break;

            // Fitur Defacer

            case 'dorking':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               reply(mess.wait);
               dork = `${body.slice(9)}`;
               anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, { method: 'get' });
               hasil = `${anu.result}`;
               nuy.sendMessage(from, hasil, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'encode64':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               encode64 = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'decode64':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               decode64 = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'decode32':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               decode32 = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'encode32':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               encode32 = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'encbinary':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               encbinary = `${body.slice(11)}`;
               anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'decbinary':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               decbin = `${body.slice(11)}`;
               anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'encoctal':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               encoc = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'decoctal':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               decoc = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'becrypt':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               becry = `${body.slice(10)}`;
               anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, { method: 'get' });
               nuy.sendMessage(from, `${anu.result}`, text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'hashidentifier':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               if (isLimit(sender)) return reply(limitend(pushname2));
               hash = `${body.slice(16)}`;
               anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`);
               hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`;
               nuy.sendMessage(from, hasilhash, text, { quoted: mek });
               await limitAdd(sender);
               break;
            // akhir encrypt & decrypt Fitur

            case 'google':
               const googleQuery = body.slice(8);
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);
               if (isLimit(sender)) return reply(limitend(pushname2));
               if (googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`);
               google({ query: googleQuery })
                  .then((results) => {
                     let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`;
                     for (let i = 0; i < results.length; i++) {
                        vars += `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`;
                     }
                     reply(vars);
                  })
                  .catch((e) => {
                     console.log(e);
                     nuy.sendMessage(from, 'Google Error : ' + e);
                  });
               await limitAdd(sender);
               break;

            case 'addbucin':
               if (!isOwner) return reply(mess.only.owner);
               huu = body.slice(10);
               bucinrandom.push(huu);
               fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom));
               reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`);
               break;
            case 'bucin':
            case 'quotebucin':
               if (isBanned) return reply(mess.only.benned);
               if (!isUser) return reply(mess.only.userB);

               hasil = bucinrandom[Math.floor(Math.random() * bucinrandom.length)];
               nuy.sendMessage(from, '*' + hasil + '*', text, { quoted: mek });
               await limitAdd(sender);
               break;
            case 'beritahoax':
               if (!isUser) return reply(mess.only.userB);
               nuy.updatePresence(from, Presence.composing);
               data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, { method: 'get' });
               teks = '=================\n';
               for (let i of data.result) {
                  teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`;
               }
               reply(teks.trim());
               await limitAdd(sender);
               break;
            case 'husbu':
               if (!isUser) return reply(mess.only.userB);
               try {
                  res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`);
                  buffer = await getBuffer(res.image);
                  nuy.sendMessage(from, buffer, image, { quoted: mek, caption: 'Ingat! Cintai Husbumu' });
               } catch (e) {
                  console.log(`Error :`, color(e, 'red'));
                  reply(' *ERROR* ');
               }
               await limitAdd(sender);
               break;
            case 'nangis':
               if (!isUser) return reply(mess.only.userB);
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', { method: 'get' });
               if (anu.error) return reply(anu.error);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  buffer = fs.readFileSync(rano);
                  nuy.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'ngewe':
               if (!isUser) return reply(mess.only.userB);
               if (!isNsfw) return reply(' *NSFW OF* ');
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', { method: 'get' });
               if (anu.error) return reply(anu.error);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  buffer = fs.readFileSync(rano);
                  nuy.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'cium':
               if (!isUser) return reply(mess.only.userB);
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', { method: 'get' });
               if (anu.error) return reply(anu.error);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  buffer = fs.readFileSync(rano);
                  nuy.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'peluk':
               if (!isUser) return reply(mess.only.userB);
               ranp = getRandom('.gif');
               rano = getRandom('.webp');
               anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', { method: 'get' });
               if (anu.error) return reply(anu.error);
               exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                  fs.unlinkSync(ranp);
                  if (err) return reply(mess.error.stick);
                  buffer = fs.readFileSync(rano);
                  nuy.sendMessage(from, buffer, sticker, { quoted: mek });
                  fs.unlinkSync(rano);
               });
               await limitAdd(sender);
               break;
            case 'moddroid':
               if (!isUser) return reply(mess.only.userB);
               data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`);
               hepi = data.result[0];
               teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`;
               buffer = await getBuffer(hepi.image);
               nuy.sendMessage(from, buffer, image, { quoted: mek, caption: `${teks}` });
               await limitAdd(sender);
               break;
            case 'happymod':
               if (!isUser) return reply(mess.only.userB);
               data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`);
               hupo = data.result[0];
               teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`;
               buffer = await getBuffer(hupo.image);
               nuy.sendMessage(from, buffer, image, { quoted: mek, caption: `${teks}` });
               await limitAdd(sender);
               break;
            default:
               if (body.startsWith(`${prefix}${command}`)) {
                  reply(`*maaf kak, ᴄommand ${prefix}${command} tidak tedaftar di dalam database* ${prefix}menu`);
               }
               if (isGroup && isSimi && budy != undefined) {
                  console.log(budy);
                  muehe = await simih(budy);
                  console.log(muehe);
                  reply(muehe);
               } else {
                  console.log(color('[Mc-Bot]', 'aqua'), 'Command Tidak Terdaftar', color(sender.split('@')[0]));
               }
         }
      } catch (e) {
         console.log('Error : %s', color(e, 'white'));
      }
   });
}
starts();
