var app = new Vue({
  el: "#app",
  data: {
    countries: {
      // countries data here
      "am-ET": "Amharic",
      "ar-SA": "Arabic",
      "be-BY": "Bielarus",
      "bem-ZM": "Bemba",
      "bi-VU": "Bislama",
      "bjs-BB": "Bajan",
      "bn-IN": "Bengali",
      "bo-CN": "Tibetan",
      "br-FR": "Breton",
      "bs-BA": "Bosnian",
      "ca-ES": "Catalan",
      "cop-EG": "Coptic",
      "cs-CZ": "Czech",
      "cy-GB": "Welsh",
      "da-DK": "Danish",
      "dz-BT": "Dzongkha",
      "de-DE": "German",
      "dv-MV": "Maldivian",
      "el-GR": "Greek",
      "en-GB": "English",
      "es-ES": "Spanish",
      "et-EE": "Estonian",
      "eu-ES": "Basque",
      "fa-IR": "Persian",
      "fi-FI": "Finnish",
      "fn-FNG": "Fanagalo",
      "fo-FO": "Faroese",
      "fr-FR": "French",
      "gl-ES": "Galician",
      "gu-IN": "Gujarati",
      "ha-NE": "Hausa",
      "he-IL": "Hebrew",
      "hi-IN": "Hindi",
      "hr-HR": "Croatian",
      "hu-HU": "Hungarian",
      "id-ID": "Indonesian",
      "is-IS": "Icelandic",
      "it-IT": "Italian",
      "ja-JP": "Japanese",
      "kk-KZ": "Kazakh",
      "km-KM": "Khmer",
      "kn-IN": "Kannada",
      "ko-KR": "Korean",
      "ku-TR": "Kurdish",
      "ky-KG": "Kyrgyz",
      "la-VA": "Latin",
      "lo-LA": "Lao",
      "lv-LV": "Latvian",
      "men-SL": "Mende",
      "mg-MG": "Malagasy",
      "mi-NZ": "Maori",
      "ms-MY": "Malay",
      "mt-MT": "Maltese",
      "my-MM": "Burmese",
      "ne-NP": "Nepali",
      "niu-NU": "Niuean",
      "nl-NL": "Dutch",
      "no-NO": "Norwegian",
      "ny-MW": "Nyanja",
      "ur-PK": "Pakistani",
      "pau-PW": "Palauan",
      "pa-IN": "Panjabi",
      "ps-PK": "Pashto",
      "pis-SB": "Pijin",
      "pl-PL": "Polish",
      "pt-PT": "Portuguese",
      "rn-BI": "Kirundi",
      "ro-RO": "Romanian",
      "ru-RU": "Russian",
      "sg-CF": "Sango",
      "si-LK": "Sinhala",
      "sk-SK": "Slovak",
      "sm-WS": "Samoan",
      "sn-ZW": "Shona",
      "so-SO": "Somali",
      "sq-AL": "Albanian",
      "sr-RS": "Serbian",
      "sv-SE": "Swedish",
      "sw-SZ": "Swahili",
      "ta-LK": "Tamil",
      "te-IN": "Telugu",
      "tet-TL": "Tetum",
      "tg-TJ": "Tajik",
      "th-TH": "Thai",
      "ti-TI": "Tigrinya",
      "tk-TM": "Turkmen",
      "tl-PH": "Tagalog",
      "tn-BW": "Tswana",
      "to-TO": "Tongan",
      "tr-TR": "Turkish",
      "uk-UA": "Ukrainian",
      "uz-UZ": "Uzbek",
      "vi-VN": "Vietnamese",
      "wo-SN": "Wolof",
      "xh-ZA": "Xhosa",
      "yi-YD": "Yiddish",
      "zu-ZA": "Zulu",
    },
    language_before: "vi-VN",
    language_after: "en-GB",
    text_before: "",
    text_after: "",
  },
  methods: {
    exchange() {
      let tempText = this.text_before;
      let tempLang = this.language_before;
      this.text_before = this.text_after;
      this.text_after = tempText;
      this.language_before = this.language_after;
      this.language_after = tempLang;
    },
    translate() {
      let text = this.text_before.trim();
      let translateFrom = this.language_before;
      let translateTo = this.language_after;
      if (!text) return;
      this.text_after = "Translating...";
      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      axios
        .get(apiUrl)
        .then((response) => {
          this.text_after = response.data.responseData.translatedText;
          response.data.matches.forEach((data) => {
            if (data.id === 0) {
              this.text_after = data.translation;
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearTranslation() {
      if (!this.text_before) {
        this.text_after = "";
      }
    },
    copyText(target) {
      let textToCopy = target === "from" ? this.text_before : this.text_after;
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        alert("Copy thanh cong");
      }
    },
    speak(target) {
      let textToSpeak = target === "from" ? this.text_before : this.text_after;
      if (textToSpeak) {
        let utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang =
          target === "from" ? this.language_before : this.language_after;
        speechSynthesis.speak(utterance);
      }
    },
  },
});
