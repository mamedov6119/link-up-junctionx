import{_ as l,r as o,o as r,a as n,b as e,e as a,d as t,w as c,f as d}from"./index-ecea8983.js";const i={},m={class:"card card-body"},p=d('<div class="mb-3"><label for="name" class="form-label"> Full name<span class="text-danger">*</span></label><input type="text" class="form-control" id="name" name="name" placeholder="Surname Name" required></div><div class="row"><div class="col-6 mb-3"><label for="email" class="form-label"> Email address<span class="text-danger">*</span></label><input type="email" class="form-control" id="email" name="email" placeholder="user@example.com" required></div><div class="col-6 mb-3"><label for="phone" class="form-label"> Mobile Number<span class="text-danger">*</span></label><input type="tel" class="form-control" id="phone" name="phone" pattern="[0-9]{11}" maxlength="11" placeholder="36102345678" required></div></div><div class="row"><div class="col-6 mb-3"><label for="password" class="form-label"> Password<span class="text-danger">*</span></label><input type="password" class="form-control" id="password" name="password" placeholder="• • • •" required></div><div class="col-6 mb-3"><label for="confirmPassword" class="form-label"> Confirm Password<span class="text-danger">*</span></label><input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="• • • •" required></div></div>',3),b=e("button",{type:"submit",class:"btn btn-primary"},"Register",-1);function f(u,_){const s=o("RouterLink");return r(),n("div",null,[e("form",m,[p,e("p",null,[a(" Have an account? "),t(s,{to:"/login"},{default:c(()=>[a("Login")]),_:1})]),b])])}const w=l(i,[["render",f]]);export{w as default};
