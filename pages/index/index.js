Page({
  data: {
    showIcon: true,
    swiperList: [],
    courses: [],
    searchList: null,
    type: 'recommend',
    tabs: [
      {name: '推荐', type: 'recommend'},
      {name: '路径', type: 'path'},
      {name: '实战', type: 'project'},
      {name: '活动', type: 'activity'},
    ],
    activities: [],
  },
  onLoad() {
    wx.request({
      url: 'https://www.fastmock.site/mock/75278ea9c64ba27d55252f4a55a7de17/weixin/api/getData',
      success:(res) => {
        const { data: { data } } = res;
        const { swiperList, courses , activities} = data;
        this.setData({
          swiperList,
          courses,
          activities
        })
      }
    })
  },
  handleInputChange(e) {
    const value = e.detail.value;
    let searchList = null;
    if(value) {
      searchList = this.data.courses.filter(item => item.title.indexOf(value) > -1)
    }
    this.setData({
      showIcon: value? false: true,
      searchList
    })
  },
  changeType(e) {
    console.log(e,'changeType');
    const type = e.currentTarget.dataset.type;
    this.setData({ type });
  },
  handleCourseTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    })
  }
})  
