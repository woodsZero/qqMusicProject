// 这个commom文件夹放置通用的接口Api，和components中的common不一样
// 基础路径
let baseUrl = 'http://localhost:3000'
// banner接口
let banner = baseUrl+'/banner';
// 电台接口
let djprogram = baseUrl+'/personalized/djprogram';
// 歌曲排行榜接口
let toplist = baseUrl + '/toplist/detail';
// 热门搜索词接口
let hotSearch = baseUrl + '/search/hot' 
// 搜索音乐接口
let searchMusic = baseUrl + '/search';
// 音乐地址接口（播放音乐）
let songUrl = baseUrl + '/song/url'
export default{
    banner,
    djprogram,
    toplist,
    hotSearch,
    searchMusic,
    songUrl,
}
