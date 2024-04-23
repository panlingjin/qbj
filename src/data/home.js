const homeList = [
  {
    algorithmId: "1",
    algorithmName: "机动车乱停放检测",
    algorithmDesc:
      "实时监控城市道路、高速公路等场景的的车辆，设置检测区域，系统自动监测区域内机动车，一旦检测机动车违规乱停放，立即产生报警，并返回图片与视频，检测机动车类型包括小汽车、卡车、公交车等，并支持设定停放时长；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "10",
    algorithmName: "暴露垃圾检测",
    algorithmDesc:
      "检测道路、社区等场景中暴露垃圾，一旦检测发现暴露垃圾，实时分析识别，立即上报报警事件，并将报警事件图片、视频存储，高效定位暴露垃圾位置；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "11",
    algorithmName: "垃圾桶满溢检测",
    algorithmDesc:
      "检测道路、社区等场景中暴露垃圾，一旦检测发现暴露垃圾，实时分析识别，立即上报报警事件，并将报警事件图片、视频存储，高效定位暴露垃圾位置；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "12",
    algorithmName: "烟火烟雾检测",
    algorithmDesc:
      "对监控区域如森林、社区、室内等场景，进行实时监测烟火，当检测到烟雾、火焰等异常事件，立即触发报警，并将报警事件上报；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "13",
    algorithmName: "占用消防通道检测",
    algorithmDesc:
      "检测住宅小区、商场等场景中占用消防通道的物体标，一旦消防通道被其他物品占用超过规定时长，立刻通知相关管理人员及时做出决策。消防通道实时监测可迅速定位占用消防通道的相关物品，支持事后管理和查询。支持主动设定时长阈值，重点检测占用消防通道的机动车、非机动车、异物等物体；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "14",
    algorithmName: "违规游泳检测",
    algorithmDesc:
      "对湖泊、河流等区域实施实时监测，通过算法识别违规游泳等行为，一旦识别发现违规游泳人员，立即发出报警；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "15",
    algorithmName: "非法垂钓检测",
    algorithmDesc:
      "对湖泊、河流等区域实施实时监测，通过算法识别滞留野钓、非法垂钓行为，一旦发现非法垂钓，立即发出警报；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "2",
    algorithmName: "无照经营游商检测",
    algorithmDesc:
      "检测街道是否存在无营业执照,未经许可在城市道路、公共场所从事流动性检测城市街道、巷道等场景中是否存在无照经营的游商摊贩，一旦监测发现无照经营游商摊贩，立即上报游商摊贩位置，重点检测马路上的推车商贩、路边流动的摆摊的商贩等；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "3",
    algorithmName: "店外经营检测",
    algorithmDesc:
      "检测人行道、街道等场景中商铺门面外的公用区域存在 经营物品，一旦发现店外经 营现象，立即上报事件。店 外经营算法支持相关执法人 员加强监管力度，有效规范 商户经营，提升市容环境。 重点检测目标为桌子、凳 子、水桶、棚伞等物品；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "4",
    algorithmName: "井盖位移或缺位检测",
    algorithmDesc:
      "检测道路、巷道等场景中井盖是否出现非正常覆盖、缺失、破损、异常凸起等情况，一旦识别发现井盖异常，立即触发报警事件。减少井盖异常造成水质污染及环境污染问题，降低安全事故发生几率，助力城市管理，守护城市安全；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "5",
    algorithmName: "临街乱倒乱排污水检测",
    algorithmDesc:
      "检测视频中是否有在指定区域中乱倒乱排污水的现象，一旦检测到有乱排乱放立即触发报警事件，及时通知相关管理人员；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "6",
    algorithmName: "车辆沿途撒漏检测",
    algorithmDesc:
      "检测视频中车辆是否有沿途撤漏的行为，一旦检测到有车辆沿途撒漏立即触发报警事件，及时通知相关管理人员；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "7",
    algorithmName: "户外广告招牌破 损、倾斜、倒塌检测",
    algorithmDesc:
      "检测视频中是否有户外广告招牌破损、倾斜、倒塌识别，一旦识别到户外广告牌异常，立即触发事件；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "8",
    algorithmName: "侵占绿化检测",
    algorithmDesc:
      "监测绿地草坪等场景是否存在侵占情况，暂时目标为机动 车，非机动车，桌子，凳 子，垃圾桶，纸箱，帐篷， 雪橇桶，防撞桶，一旦识别 发现侵占绿地物体立即上报事件；",
    createTime: "2023-11-14 17:39:06",
  },
  {
    algorithmId: "9",
    algorithmName: "城市道路积水检测",
    algorithmDesc:
      "检测识别室外道路、涵洞、隧道等场景是否有大面积积水现象，一旦发现积水，立即触发报警事件；",
    createTime: "2023-11-14 17:39:06",
  },
];

exports.homeList = homeList;
