require.config({
	// baseUrl:'lib'//data-main文件所在的文件夹
	paths : {
		//这里的路径基于baseUrl
        "jquery": "../libs/jquery-3.1.1",
        "common": "../libs/common",
        "cookie":"../libs/jquery/jquery.cookie",
        "lazyload":"../libs/jquery-lazyload-1.9.3/jquery.lazyload.min"
    },
 shim:{
    	// 表示gdszoom依赖jquery
        "common":["jquery"],
    	"cookie":["jquery"],
    	"lazyload":["jquery"]
    }
})