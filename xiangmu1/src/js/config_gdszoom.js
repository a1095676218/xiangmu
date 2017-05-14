require.config({
	// baseUrl:'lib'//data-main文件所在的文件夹
	paths : {
		//这里的路径基于baseUrl
        "jquery": "../libs/jquery-3.1.1",
        "common": "../libs/common",
        "lazyload":"../libs/jquery-lazyload-1.9.3/jquery.lazyload.min",
        "cookie":"../libs/jquery/jquery.cookie",
        "gdszoom":"../libs/jquery-gdszoom/jquery.gdszoom"
    },
 shim:{
    	// 表示gdszoom依赖jquery
        "common":["jquery"], 
        "cookie":["jquery"], 
    	"gdszoom":["jquery"],
        "lazyload":["jquery"]
    }
})