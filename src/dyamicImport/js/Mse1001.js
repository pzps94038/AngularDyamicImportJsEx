(() => {
  console.log('loading Js success...')
})()

const taipeiArea = [
  {
    value: "中正區",
  },
  {
    value: "萬華區",
  },
  {
    value: "大同區",
  },
  {
    value: "中山區",
  },
  {
    value: "松山區",
  },
  {
    value: "大安區",
  },
  {
    value: "信義區",
  },
  {
    value: "內湖區",
  },
  {
    value: "南港區",
  },
  {
    value: "士林區",
  },
  {
    value: "北投區",
  },
  {
    value: "文山區",
  },
];

const newTaipeiArea = [
  {
    value: "板橋區",
  },
  {
    value: "中和區",
  },
  {
    value: "三重區",
  },
  {
    value: "新莊區",
  },
  {
    value: "土城區",
  },
  {
    value: "汐止區",
  },
  {
    value: "鶯歌區",
  },
  {
    value: "淡水區",
  },
  {
    value: "五股區",
  },
  {
    value: "林口區",
  },
  {
    value: "深坑區",
  },
  {
    value: "坪林區",
  },
  {
    value: "石門區",
  },
  {
    value: "萬華區",
  },
  {
    value: "雙溪區",
  },
  {
    value: "烏來區",
  },
  {
    value: "永和區",
  },
  {
    value: "新店區",
  },
  {
    value: "蘆竹區",
  },
  {
    value: "樹林區",
  },
  {
    value: "三峽區",
  },
  {
    value: "瑞芳區",
  },
  {
    value: "泰山區",
  },
  {
    value: "八里區",
  },
  {
    value: "石碇區",
  },
  {
    value: "三芝區",
  },
  {
    value: "金山區",
  },
  {
    value: "平溪區",
  },
  {
    value: "貢寮區",
  },
];

export const cityChange = (
  form,
  obj
) => {
  const city = form.get("city");
  const area = form.get("area");
  city.valueChanges.subscribe((city) => {
    area.setValue("");
    switch (city) {
      case "臺北市":
        obj.areas = taipeiArea;
        break;
      case "新北市":
        obj.areas = newTaipeiArea;
        break;
      default:
        obj.areas = [];
        break;
    }
  });
};
