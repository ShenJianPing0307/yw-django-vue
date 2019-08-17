from django.shortcuts import render,HttpResponse
from django.views import View
from crm.forms.login import LoginForm
from django.middleware.csrf import get_token ,rotate_token
# Create your views here.
import json
from crm.models import *
import uuid

class LoginView(View):

    def get(self,request):
        pass

    def post(self,request):
        ret={
            "data":{},
            "meta":{
                "code":201,
                "message":"用户名或密码错误"
            }
        }
        user_obj=json.loads(str(request.body,encoding='utf8'))
        username=user_obj.get('username')
        password=user_obj.get('password')
        if username and password:
            obj=UserInfo.objects.filter(username=username,password=password).first()
            if obj:
                #生成token值
                token=str(uuid.uuid4())
                user_token=UserToken.objects.filter(user=obj).first()
                if not user_token:
                    UserToken.objects.create(user=obj,token=token)
                ret["data"]["username"]=username
                ret["data"]["password"]=password
                ret["data"]["token"]=token
                ret["meta"]["code"]=200
                ret["meta"]["message"]="登陆成功"
            else:
                pass
        else:
            pass
        return HttpResponse(json.dumps(ret,ensure_ascii=False))
