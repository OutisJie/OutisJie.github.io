(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(t,s,r){t.exports=r.p+"assets/img/CPU.94078129.png"},185:function(t,s,r){t.exports=r.p+"assets/img/GPU.8fc555c4.png"},186:function(t,s,r){t.exports=r.p+"assets/img/hw-os-app.2af38ddf.png"},187:function(t,s,r){t.exports=r.p+"assets/img/browser1.c94db031.gif"},197:function(t,s,r){"use strict";r.r(s);var a=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作系统")]),t._v(" "),a("p",[a("strong",[t._v("操作系统是什么？操作系统是管理计算机硬件与软件资源的系统软件，同时也是计算机系统的内核与基石。")]),t._v("\n操作系统是一个软件，计算机上的所有硬件和资源的调度，都是由操作系统的内核来完成的，在内核之上，扩展出输入输出、网络、文件系统等，就变成了操作系统。所以说，一个没有图形化界面，没有文件系统的，也能叫做操作系统。")]),t._v(" "),a("p",[t._v("现在的浏览器特别是Chrome虽然能够完成很多操作系统的任务，但也都是借助操作系统内核来完成的，就算浏览器也具备了和Windows、macOS一样多的功能，它也离不开操作系统内核，充其量，只能成为操作系统的外壳。")]),t._v(" "),a("h2",{attrs:{id:"cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu","aria-hidden":"true"}},[t._v("#")]),t._v(" CPU")]),t._v(" "),a("img",{staticStyle:{position:"relative",left:"50%",transform:"translateX(-50%)"},attrs:{src:r(184)}}),t._v(" "),a("p",[t._v("CPU 全称 Central Processing Unit. CPU是计算机的大脑，一个CPU内核，可以在任务到来的时候一个接一个的完成工作，就像图中的每个员工。他们能够处理从数学到艺术的各种事情，同时也知道如何对顾客的电话做出回应。在过去，CPU都是单芯片单核的，现在CPU芯片能有多个核，从而加快掌机或者手提电脑的速度。")]),t._v(" "),a("h2",{attrs:{id:"gpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu","aria-hidden":"true"}},[t._v("#")]),t._v(" GPU")]),t._v(" "),a("img",{staticStyle:{position:"relative",left:"50%",transform:"translateX(-50%)"},attrs:{src:r(185)}}),t._v(" "),a("p",[t._v("GPU 全称 Graphics Processing Unit. 和CPU不同，GPU擅长处理简单任务，但是可以同时由多个核心共同工作。和它的名字一样，它最开始是为了处理图像而被设计出来的，这也是为什么在图像领域，使用“GPU”或者“GPU支持”的技术意味着更快的渲染以及更顺滑的交互。近年来，随着GPU计算速度的不断加快，仅在GPU上就可以实现越来越多的计算。")]),t._v(" "),a("h2",{attrs:{id:"层级关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层级关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 层级关系")]),t._v(" "),a("img",{staticStyle:{position:"relative",left:"50%",transform:"translateX(-50%)"},attrs:{src:r(186)}}),t._v(" "),a("p",[t._v("上图表示了硬件、操作系统、应用软件的层级关系")]),t._v(" "),a("h2",{attrs:{id:"进程（process）和线程（thread）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程（process）和线程（thread）","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程（Process）和线程（Thread）")]),t._v(" "),a("p",[a("strong",[t._v("进程是资源分配的单位，线程是调度的基本单位。")])]),t._v(" "),a("p",[t._v("想象一下，有这样一个工厂，工厂有很多车间，但只有一座发电厂。计算机的核心是CPU，它承担了所有的计算任务，就好比是发电厂。")]),t._v(" "),a("p",[t._v("假如，发电厂的电力有限，一次只能供一间车间工作。也就是说，当一间车间开工，其他所有车间必须停工。也就是说，单个CPU一次只能运行一个任务。那为什么我们能变写代码的时候边听歌呢，答案就是"),a("strong",[t._v("快！")]),t._v(" 闪电侠看过没有，快就完了。当然现在也有了很多多CPU的电脑，算是真正意义上的并行。")]),t._v(" "),a("img",{staticStyle:{position:"relative",left:"50%",transform:"translateX(-50%)"},attrs:{src:r(187)}}),t._v(" "),a("p",[t._v("各个车间，就相当于计算机的各个进程，"),a("strong",[t._v("CPU总是运行一个进程")]),t._v("；车间里面的各个工人，彼此分工，协同完成工作，就相当于线程，"),a("strong",[t._v("一个进程可以有多个线程")]),t._v("。每个车间各自占用一定的资源，车间里面的资源是工人们共享的，但是资源的大小不一样，比如厕所，一次只能由一个人进去，占用资源的线程不希望被别的线程打断，解决办法就是在厕所门口挂一把锁，这就叫做"),a("strong",[t._v("互斥锁（Mutual exclusion，缩写 Mutex）")]),t._v("。也有的资源较大，比如厨房（讲道理车间怎么会有厨房。。。），一次可以有多个工人干活。这时候怎么判断厨房里是不是已经满员了呢，办法就是在门口放N把钥匙，每个进去的人就取一把钥匙，出来的时候再挂回去，这样工人在看到门口没有钥匙就知道自己应该等待了，这叫做"),a("strong",[t._v("信号量（Semaphore）")]),t._v("。钻牛角尖的人会问，那N=1的情况不就是互斥吗，是的，没错，但是互斥锁不仅更简单，而且效率更高。")]),t._v(" "),a("p",[t._v("一个进程还可以要求操作系统生成另一个进程来执行不同的任务，系统会为新的进程分配独立的内存，两个进程之间可以使用 "),a("strong",[t._v("IPC(Inter Process Communication)")]),t._v(" 进行通信。很多应用都会采用这样的设计，如果一个工作进程反应迟钝，重启这个进程不会影响应用其它进程的工作。")])])}],e=r(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);i.options.__file="os.md";s.default=i.exports}}]);