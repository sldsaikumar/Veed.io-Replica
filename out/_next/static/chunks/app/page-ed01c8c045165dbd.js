(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3816:(e,o,i)=>{"use strict";i.d(o,{default:()=>k});var t=i(5155),r=i(2115),n=i(1587),s=i(8887),l=i(112),d=i(8593),a=i(3191),p=i(6707);function x(e){let{isPlaying:o,onPlay:i,onPause:r,currentTime:x}=e;return(0,t.jsxs)(n.s,{justify:"space-between",align:"center",p:"xs",h:"100%",style:{borderBottom:"1px solid #eaeaea",backgroundColor:"#ffffff",padding:"0 16px"},children:[(0,t.jsxs)(n.s,{align:"center",gap:"md",children:[(0,t.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 52 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0ZM37.668 27.8545L20.5324 38.2963C20.2008 38.5094 19.8164 38.6152 19.4375 38.6152C19.0996 38.6152 18.7617 38.5312 18.4465 38.3633C17.8027 38.0215 17.4062 37.3451 17.4062 36.6152V15.7314C17.4062 15.0016 17.8027 14.3252 18.4465 13.9834C19.0902 13.6416 19.8773 13.6943 20.4758 14.1182L37.6113 24.5602C38.1445 24.9346 38.4652 25.5354 38.4707 26.1807C38.4762 26.8314 38.1609 27.4322 37.668 27.8545Z",fill:"#4648F0"})}),(0,t.jsx)(s.E,{fw:700,fz:"lg",style:{color:"#333"},children:"VEED Clone"})]}),(0,t.jsxs)(l.Y,{style:{display:"flex",gap:"10px"},children:[(0,t.jsx)(d.k,{placeholder:"Project Name",variant:"filled",style:{width:200},styles:{input:{backgroundColor:"#f5f5f5",border:"none",fontSize:"14px"}}}),(0,t.jsx)(a.M,{variant:"subtle",size:"md",children:(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z",stroke:"#333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,t.jsx)(a.M,{variant:"subtle",size:"md",children:(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M12 5v14M5 12h14",stroke:"#333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,t.jsxs)(l.Y,{style:{display:"flex",gap:"10px"},children:[(0,t.jsx)(s.E,{fz:"sm",style:{color:"#666"},children:(e=>{let o=Math.floor(e/60),i=Math.floor(e%60);return"".concat(o.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"))})(x)}),o?(0,t.jsx)(p.$,{variant:"outline",color:"gray",onClick:r,style:{padding:"6px 12px",borderColor:"#ddd",height:"34px",fontSize:"13px"},children:"Pause"}):(0,t.jsx)(p.$,{variant:"outline",color:"gray",onClick:i,style:{padding:"6px 12px",borderColor:"#ddd",height:"34px",fontSize:"13px"},children:"Play"}),(0,t.jsx)(p.$,{variant:"filled",color:"blue",style:{backgroundColor:"#4648F0",height:"34px",padding:"0 16px",fontSize:"13px"},children:"Done"})]})]})}var h=i(1220),c=i(7287);function f(e){let{onAddMedia:o}=e,i=(0,r.useRef)(null);return(0,t.jsxs)(h.B,{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px"},children:[(0,t.jsx)(s.E,{fw:700,fz:"xl",style:{marginBottom:"16px",color:"#333"},children:"Add Media"}),(0,t.jsx)(c.t,{withBorder:!0,p:"md",style:{borderRadius:"8px",borderStyle:"dashed",borderWidth:"2px",borderColor:"#ddd",cursor:"pointer",textAlign:"center",marginBottom:"20px"},onClick:()=>{var e;null===(e=i.current)||void 0===e||e.click()},onDragOver:e=>{e.preventDefault(),e.stopPropagation()},onDrop:e=>{e.preventDefault(),e.stopPropagation();let i=e.dataTransfer.files;i&&i.length>0&&o(i[0])},children:(0,t.jsxs)(n.s,{direction:"column",align:"center",justify:"center",style:{height:"120px"},children:[(0,t.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M12 16L12 8",stroke:"#4648F0",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M9 11L12 8 15 11",stroke:"#4648F0",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:"#4648F0",strokeWidth:"2"})]}),(0,t.jsx)(s.E,{fw:600,mt:"sm",children:"Upload a File"}),(0,t.jsx)(s.E,{size:"sm",c:"dimmed",children:"Drag & drop a file or click to browse"}),(0,t.jsx)(s.E,{size:"xs",c:"dimmed",mt:"xs",children:"Import from a link"})]})}),(0,t.jsx)("input",{type:"file",ref:i,style:{display:"none"},onChange:e=>{let i=e.target.files;i&&i.length>0&&o(i[0])},accept:"image/*,video/*"})]})}var u=i(311),g=i(8141),b=i(5617);function m(e){let{mediaItems:o,selectedMediaId:i,onSelectMedia:n,onUpdateMedia:s,currentTime:l,setCurrentTime:d,isPlaying:a}=e,p=(0,r.useRef)(null),x=(0,r.useRef)(),h=(0,r.useRef)(0),f=(0,r.useRef)({});(0,r.useEffect)(()=>{if(a){let e;let o=i=>{void 0===e&&(e=i);let t=i-(h.current||i);h.current=i,d(e=>e+t/1e3),x.current=requestAnimationFrame(o)};return x.current=requestAnimationFrame(o),Object.values(f.current).forEach(e=>{e.paused&&e.play().catch(e=>console.error("Video play error:",e))}),()=>{x.current&&cancelAnimationFrame(x.current)}}Object.values(f.current).forEach(e=>{e.paused||e.pause()}),x.current&&cancelAnimationFrame(x.current),h.current=0},[a,d]);let m=e=>e?{bottomRight:(0,t.jsx)("div",{style:{width:"10px",height:"10px",backgroundColor:"#4648F0",borderRadius:"2px",position:"absolute",bottom:"-5px",right:"-5px",cursor:"se-resize"}}),bottomLeft:(0,t.jsx)("div",{style:{width:"10px",height:"10px",backgroundColor:"#4648F0",borderRadius:"2px",position:"absolute",bottom:"-5px",left:"-5px",cursor:"sw-resize"}}),topRight:(0,t.jsx)("div",{style:{width:"10px",height:"10px",backgroundColor:"#4648F0",borderRadius:"2px",position:"absolute",top:"-5px",right:"-5px",cursor:"ne-resize"}}),topLeft:(0,t.jsx)("div",{style:{width:"10px",height:"10px",backgroundColor:"#4648F0",borderRadius:"2px",position:"absolute",top:"-5px",left:"-5px",cursor:"nw-resize"}})}:{};return(0,t.jsxs)(u.a,{style:{height:"100%",position:"relative"},children:[(0,t.jsx)(g.o,{style:{height:"100%",padding:"20px"},children:(0,t.jsx)(c.t,{ref:p,shadow:"xs",style:{width:"1280px",height:"720px",position:"relative",backgroundColor:"#000",overflow:"hidden",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.08)"},children:o.map(e=>{let o=l>=e.startTime&&l<=e.endTime,r=i===e.id;return o?(0,t.jsx)(b.p,{size:{width:e.size.width,height:e.size.height},position:{x:e.position.x,y:e.position.y},onDragStop:(o,i)=>{s(e.id,{position:{x:i.x,y:i.y}})},onResizeStop:(o,i,t,r,n)=>{s(e.id,{position:n,size:{width:parseInt(t.style.width),height:parseInt(t.style.height)}})},onClick:()=>n(e.id),style:{outline:r?"2px solid #4648F0":"none",zIndex:r?10:1},resizeHandleComponent:m(r),minWidth:50,minHeight:50,bounds:"parent",children:"video"===e.type?(0,t.jsx)("video",{ref:o=>{o&&(f.current[e.id]=o)},src:e.url,style:{width:"100%",height:"100%",objectFit:"contain"},muted:!0}):(0,t.jsx)("div",{style:{width:"100%",height:"100%",position:"relative"},children:(0,t.jsx)("img",{src:e.url,style:{width:"100%",height:"100%",objectFit:"contain"},alt:"Media item"})})},e.id):null})})}),0===o.length&&(0,t.jsxs)(u.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",zIndex:5,pointerEvents:"none"},children:[(0,t.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M12 5v14M5 12h14",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)(u.a,{style:{color:"#ffffff",marginTop:"16px",fontSize:"18px",fontWeight:500},children:"Add media to this project"})]})]})}var j=i(3776),y=i(8265),w=i(9074);function v(e){let{media:o,onUpdate:i}=e;return(0,t.jsxs)(u.a,{mt:"xl",children:[(0,t.jsx)(j.c,{mb:"lg"}),(0,t.jsx)(s.E,{fw:700,fz:"lg",mb:"md",style:{color:"#333"},children:"Media Properties"}),(0,t.jsxs)(h.B,{spacing:"xl",style:{marginBottom:"20px"},children:[(0,t.jsxs)(u.a,{children:[(0,t.jsx)(s.E,{size:"sm",mb:"xs",fw:500,style:{color:"#555"},children:"Dimensions"}),(0,t.jsxs)(l.Y,{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[(0,t.jsx)(y.Q,{label:"Width (px)",value:o.size.width,onChange:e=>{void 0!==e&&""!==e&&i({size:{...o.size,width:Number(e)}})},min:10,max:1920,step:1,styles:{wrapper:{backgroundColor:"#f5f5f5",border:"none",borderRadius:"4px",flex:1},input:{backgroundColor:"#f5f5f5",border:"none",fontSize:"14px"},label:{fontSize:"12px",color:"#666"}}}),(0,t.jsx)(y.Q,{label:"Height (px)",value:o.size.height,onChange:e=>{void 0!==e&&""!==e&&i({size:{...o.size,height:Number(e)}})},min:10,max:1080,step:1,styles:{wrapper:{backgroundColor:"#f5f5f5",border:"none",borderRadius:"4px",flex:1},input:{backgroundColor:"#f5f5f5",border:"none",fontSize:"14px"},label:{fontSize:"12px",color:"#666"}}})]}),(0,t.jsxs)(l.Y,{style:{marginTop:"8px",display:"flex",justifyContent:"space-between"},children:[(0,t.jsx)(s.E,{size:"xs",c:"dimmed",children:"Lock aspect ratio"}),(0,t.jsx)(w.d,{size:"xs",color:"blue",styles:{track:{backgroundColor:"#e0e0e0",borderColor:"#e0e0e0",cursor:"pointer"},thumb:{backgroundColor:"#fff",borderColor:"#e0e0e0"}}})]})]}),(0,t.jsxs)(u.a,{children:[(0,t.jsx)(s.E,{size:"sm",mb:"xs",fw:500,style:{color:"#555"},children:"Position"}),(0,t.jsxs)(l.Y,{style:{display:"flex",gap:"8px"},children:[(0,t.jsx)(y.Q,{label:"X Position",value:o.position.x,onChange:e=>{void 0!==e&&""!==e&&i({position:{...o.position,x:Number(e)}})},min:0,step:1,styles:{wrapper:{backgroundColor:"#f5f5f5",border:"none",borderRadius:"4px",flex:1},input:{backgroundColor:"#f5f5f5",border:"none",fontSize:"14px"},label:{fontSize:"12px",color:"#666"}}}),(0,t.jsx)(y.Q,{label:"Y Position",value:o.position.y,onChange:e=>{void 0!==e&&""!==e&&i({position:{...o.position,y:Number(e)}})},min:0,step:1,styles:{wrapper:{backgroundColor:"#f5f5f5",border:"none",borderRadius:"4px",flex:1},input:{backgroundColor:"#f5f5f5",border:"none",fontSize:"14px"},label:{fontSize:"12px",color:"#666"}}})]})]}),(0,t.jsxs)(u.a,{children:[(0,t.jsx)(s.E,{size:"sm",mb:"xs",fw:500,style:{color:"#555"},children:"Timing"}),(0,t.jsxs)(l.Y,{style:{display:"flex",gap:"8px"},children:[(0,t.jsx)(y.Q,{label:"Start Time (sec)",value:o.startTime,onChange:e=>{void 0!==e&&""!==e&&i({startTime:Number(e)})},min:0,step:.1,precision:1,styles:{wrapper:{backgroundColor:"#f5f5f5",border:"none",borderRadius:"4px",flex:1},input:{backgroundColor:"#f5f5f5",border:"none",fontSize:"14px"},label:{fontSize:"12px",color:"#666"}}}),(0,t.jsx)(y.Q,{label:"End Time (sec)",value:o.endTime,onChange:e=>{void 0!==e&&""!==e&&i({endTime:Number(e)})},min:.1,step:.1,precision:1,styles:{wrapper:{backgroundColor:"#f5f5f5",border:"none",borderRadius:"4px",flex:1},input:{backgroundColor:"#f5f5f5",border:"none",fontSize:"14px"},label:{fontSize:"12px",color:"#666"}}})]})]})]})]})}var C=i(6398);function k(){let[e,o]=(0,r.useState)(null),[i,s]=(0,r.useState)([]),[d,a]=(0,r.useState)(0),[p,h]=(0,r.useState)(!1),c=(i,t)=>{s(e=>e.map(e=>e.id===i?{...e,...t}:e)),e&&e.id===i&&o(e=>e?{...e,...t}:e)};return(0,t.jsxs)(C.G,{header:{height:60},navbar:{width:300,breakpoint:"sm"},padding:0,styles:{main:{backgroundColor:"#f8f9fa"},header:{backgroundColor:"#ffffff",borderBottom:"1px solid #e0e0e0"},navbar:{backgroundColor:"#ffffff",borderRight:"1px solid #e0e0e0",overflow:"auto",padding:"16px"}},children:[(0,t.jsx)(C.G.Header,{children:(0,t.jsx)(x,{isPlaying:p,onPlay:()=>{h(!0),a(0)},onPause:()=>{h(!1)},currentTime:d})}),(0,t.jsxs)(C.G.Navbar,{children:[(0,t.jsx)(f,{onAddMedia:e=>{let i="media-".concat(Date.now()),t=e.type.includes("video"),r=e.type.includes("image");if(!t&&!r){alert("Please upload a video or image file.");return}let n={id:i,type:t?"video":"image",file:e,url:URL.createObjectURL(e),width:320,height:240,startTime:0,endTime:t?60:10,position:{x:100,y:100},size:{width:320,height:240}};s(e=>[...e,n]),o(n)}}),e&&(0,t.jsx)(v,{media:e,onUpdate:o=>c(e.id,o)})]}),(0,t.jsx)(C.G.Main,{children:(0,t.jsxs)(n.s,{direction:"column",style:{height:"100%",paddingTop:"20px",overflow:"hidden"},children:[(0,t.jsx)(u.a,{style:{flex:1,overflow:"hidden"},children:(0,t.jsx)(m,{mediaItems:i,selectedMediaId:null==e?void 0:e.id,onSelectMedia:e=>{let t=i.find(o=>o.id===e);t&&o(t)},onUpdateMedia:c,currentTime:d,setCurrentTime:a,isPlaying:p})}),(0,t.jsx)(l.Y,{style:{height:"40px",borderTop:"1px solid #e0e0e0",padding:"0 16px",backgroundColor:"#ffffff",display:"flex",justifyContent:"center"},children:(0,t.jsxs)(u.a,{style:{fontSize:"14px"},children:[d.toFixed(1),"s / ",e?e.endTime.toFixed(1):"0.0","s"]})})]})})]})}},5070:(e,o,i)=>{Promise.resolve().then(i.bind(i,3816))}},e=>{var o=o=>e(e.s=o);e.O(0,[859,496,441,684,358],()=>o(5070)),_N_E=e.O()}]);