let handler = m => m;

handler.all = async function(m) {
  if (/^كورة$/i.test(m.text)) {
    conn.reply(m.chat, `*⚽【 ${pickRandom(global.frases)} 】⚽*
${gt}`, m);
  }
};

handler.help = ['frases'];
handler.tags = ['fun'];
handler.command = /^كورة$/i; 
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.frases = [
 'ليونيل ميسي',
'كرستيانو رونالدو',
'نيمار جونيور',
'فينيسيوس',
'رودريغيو',
'روديغير',
'اراوخو',
'كريستنسن',
'كوندي',
'بالدي',
'غوندوغان',
'روميو',
'شتيقن',
'ليفاندوفسكي',
'فاتي',
'رافينيا',
'ديمبيلي',
'الزلزلوي',
'خوسيلو',
'ابراهيم دياز',
'ماريانو',
'لوكا مودريتش',
'لوكا يوفيتش',
'توني كروس',
'تشاوميني',
'كامافينجا',
'كارفاخال',
'ميليتاو',
'بيلنجهام',
'اردا غولر',
'ميندي',
'كورتوا',
'ناتشو',
'رياض محرز',
'ايرلنغ هالاند',
'كيفين ديبروين',
'فودين',
'غريليش',
'كوفاسيتش',
'روبن دياز',
'اكانجي',
'لابورتا',
'ستونز',
'وولكر',
'اكي',
'ايديرسون',
'صلاح',
'نونيز',
'لويس دياز',
'ماك اليستر',
'تياغو الكنتارا',
'فابينيو',
'فان دايك',
'كوناتي',
'جوميز',
'ارنولد',
'روبنسون',
'اليسون',
'اوديقارد',
'ساكا',
'تشاكا',
'هافيرتز',
'النني',
'جيسوس',
'مارتنلي',
'رونالدينو',
'رونالدو الظاهرة',
'ريفالدو',
'روماريو',
'لوكاس باكيتا',
'لوكاس مورا',
'زيكو',
'ادريانو',
'كاكا',
'داني الفيس',
'كافو',
'راموس',
'مالديني',
'نيستا',
'غاتوزو',
'بيكيه',
'لويس سواريز',
'فورلان',
'خاميس رودريغيز',
'انيستا',
'تشافي',
'بوسكيتس',
'هندرسون',
'بوبي',
'الميرون',
'فاردي',
'سون',
'هاري كين',
'ريتشالسون',
'روني',
'غيغز',
'شمايكل',
'ياشين',
'بيكنباور',
'غيرد مولر',
'كيميتش',
'ماني',
'ساني',
'نوير',
'توماس مولر',
'هيرنانديز',
'ثيو',
'لياو',
'زلاتان إبراهيموفيتش',
'جيرو',
'مانزوكيتش',
'راكيتيتش',
'كفاراتسخيليا',
'اوسيمين',
'لوبوتكا',
'انغويسا',
'راؤول',
'توريس',
'جيرارد',
'مايكل أوين',
'داقلش',
'رومانيجه',
'ديستيفانو',
'بوشكاش',
'بيليه',
'مارادونا',
'موراتا',
'غريزمان',
'اوبلاك',
'ديباي',
'كوريا',
'مونتيل',
'ديبول',
'لاوتارو',
'لوكاكو',
'باريلا',
'اونانا',
'هندانوفيتش',
'سكرينيار',
'دوناروما',
'مبابي',
'سيلفا',
'جواو فيليكس',
'جواو كانسلو',
'ديبالا',
'اوباميانغ',
'لاكازيت',
'ديابي',
'فوفانا',
'نيفيز',
'سافيتش',
'بنزيما',
'كورنادو',
'رومارينيو',
'قروهي',
'بيكهام',
'ميتروفيتش',
'دي خيا',
'راشفورد',
'ماغواير',
'ديبو مارتينيز',
'بيساكا',
'لوك شو',
'برونو',
'ايريكسين',
'كاسيميرو',
'رود فان',
'باتريسيو',
'كانتي',
'بوقبا',
'ماتويدي',
'اومتيتي',
'لوريس',
'لوريس كاريوس',
'بيل',
'ايسكو',
'اسينسيو',
'روبيرتو',
'روبيرتو كارلوس',
'روبيرتو باجيو',
'بونو',
'نصيري',
'حكيم زياش',
'اشرف حكيمي',
'رومان سايس',
'نايف اكرد',
'ديونغ',
'فان بيرسي',
'فان خال',
'غوارديولا',
'كلوب',
'سيميوني',
'سالم الدوسري',
'هتان',
'نايف هزازي',
'رضى تكر',
'باستيان شفيشنايدر',
'تياغو سيلفا',
'كافاني',
'فالفيردي',
'ماركينيوس',
'برايثويت',
'عمر السومه',
'كاريو',
'أكرم عفيف',
'مادو',
'رويس',
'العويس',
'دافيد سيلفا',
'دافيد لويس',
'يوهان كرويف',
'بلاتيني',
'فان باستن',
'ماثيوس',
'غوريتسكا',
'زيدان',
'تيري هنري',
'صامويل إيتو',
'مسعود اوزيل',
'بيتر تشيك',
'لامبارد',
'هازارد',
'فيرمينو',
'ديماريا',
'انزو فرنانديز',
'اغويرو'
]