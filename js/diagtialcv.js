'use strict';

/* Get param of href when load the page */
addEventListener("DOMContentLoaded", (event) => {
    var dataValue = location.href.split("data_value=")[1];
    if(dataValue == "project_01"){
        showDetail(1);
    } else if(dataValue == "project_02"){
        showDetail(2);
    } else {
        showDetail(3);
    }
});

/* Show infomation match with param getted on href */
function showDetail(numberProject){
    if(numberProject == 1){
        var _project = createObj(1);
        
        document.getElementById('goal_01').innerHTML = _project.goals[0];
        document.getElementById('goal_02').innerHTML = _project.goals[1];
        document.getElementById('goal_03').innerHTML = _project.goals[2];
        document.getElementById('goal_04').innerHTML = _project.goals[1];
        document.getElementById('goal_05').innerHTML = _project.goals[2];

        document.getElementById('name_01').innerHTML = _project.teams[0];
        document.getElementById('name_02').parentNode.parentNode.style.display = "none";
        document.getElementById('name_03').parentNode.parentNode.style.display = "none";
        document.getElementById('name_04').parentNode.parentNode.style.display = "none";


        document.getElementById('scope_01').innerHTML = _project.scopes[0];
        document.getElementById('scope_02').innerHTML = _project.scopes[1];

        document.getElementById('primary_01').innerHTML = _project.primarys[0];
        document.getElementById('primary_02').innerHTML = _project.primarys[1];

        document.getElementById('timeline_01').innerHTML = _project.timelines[0];
        document.getElementById('timeline_02').innerHTML = _project.timelines[1];
        document.getElementById('timeline_03').innerHTML = _project.timelines[3];
        document.getElementById('timeline_04').innerHTML = _project.timelines[4];
        document.getElementById('timeline_05').innerHTML = _project.timelines[5];
        document.getElementById('timeline_06').parentNode.parentNode.style.display = "none";
        document.getElementById('timeline_07').parentNode.parentNode.style.display = "none";

    } else if(numberProject == 2){

        var _project = createObj(2);
        
        document.getElementById('goal_01').innerHTML = _project.goals[0];
        document.getElementById('goal_02').innerHTML = _project.goals[1];
        document.getElementById('goal_03').innerHTML = _project.goals[2];
        document.getElementById('goal_04').innerHTML = _project.goals[1];
        document.getElementById('goal_05').innerHTML = _project.goals[2];

        document.getElementById('name_01').innerHTML = _project.teams[0];
        document.getElementById('name_02').innerHTML = _project.teams[1];
        document.getElementById('name_03').parentNode.parentNode.style.display = "none";
        document.getElementById('name_04').parentNode.parentNode.style.display = "none";


        document.getElementById('scope_01').innerHTML = _project.scopes[0];
        document.getElementById('scope_02').innerHTML = _project.scopes[1];

        document.getElementById('primary_01').innerHTML = _project.primarys[0];
        document.getElementById('primary_02').innerHTML = _project.primarys[1];

        document.getElementById('timeline_01').innerHTML = _project.timelines[0];
        document.getElementById('timeline_02').innerHTML = _project.timelines[1];
        document.getElementById('timeline_03').innerHTML = _project.timelines[3];
        document.getElementById('timeline_04').innerHTML = _project.timelines[4];
        document.getElementById('timeline_05').innerHTML = _project.timelines[5];
        document.getElementById('timeline_06').parentNode.parentNode.style.display = "none";
        document.getElementById('timeline_07').parentNode.parentNode.style.display = "none";
    } else {

        var _project = createObj(3);
        
        document.getElementById('goal_01').innerHTML = _project.goals[0];
        document.getElementById('goal_02').innerHTML = _project.goals[1];
        document.getElementById('goal_03').innerHTML = _project.goals[2];
        document.getElementById('goal_04').innerHTML = _project.goals[1];
        document.getElementById('goal_05').innerHTML = _project.goals[2];

        document.getElementById('name_01').innerHTML = _project.teams[0];
        document.getElementById('name_02').innerHTML = _project.teams[1];
        document.getElementById('name_03').innerHTML = _project.teams[2];
        document.getElementById('name_04').parentNode.parentNode.style.display = "none";


        document.getElementById('scope_01').innerHTML = _project.scopes[0];
        document.getElementById('scope_02').innerHTML = _project.scopes[1];

        document.getElementById('primary_01').innerHTML = _project.primarys[0];
        document.getElementById('primary_02').innerHTML = _project.primarys[1];

        document.getElementById('timeline_01').innerHTML = _project.timelines[0];
        document.getElementById('timeline_02').innerHTML = _project.timelines[1];
        document.getElementById('timeline_03').innerHTML = _project.timelines[3];
        document.getElementById('timeline_04').innerHTML = _project.timelines[4];
        document.getElementById('timeline_05').innerHTML = _project.timelines[5];
        document.getElementById('timeline_06').parentNode.parentNode.style.display = "none";
        document.getElementById('timeline_07').parentNode.parentNode.style.display = "none";
    }
}

/* Create object match with project clicked */
function createObj(numberProject){
    var Project = {
        goals : [],
        teams : [],
        scopes : [],
        primarys : [],
        timelines : []
    };

    if (numberProject == 1){

        Project.goals.push("Thiết kế web Responsive", "Hiển thị phần Thông tin cơ bản theo từng loại kích thước màn hình",
        "Chức năng ẩn thông tin cá nhân", "Bổ sung Project Charter cho các dự án","Đưa trang Web lên online");
        Project.teams.push("Name: Vu Minh Quang");
        Project.scopes.push("scopes1", "scopes2");
        Project.primarys.push("Hiển thị phần Thông tin cơ bản theo từng loại kích thước màn hình", "Bổ sung Project Charter cho các dự án");
        Project.timelines.push("24/10 : Khoi chay du an", 
        "24/10 - 30/11 : Hoan tat hien thi cac thong tin co ban" , 
        "30/11 - 06/11 : Hoan thien hien thi man hinh theo tung kich thuoc" , 
        "06/11 - 12/11 : Hoan tat chuc nang an thong tin" , 
        "12/11 - 25/11 : Hoan tat bổ sung Project Charter cho các dự án " , 
        "25/11 - 30/11 : Đưa trang Web lên online ");

    } else if (numberProject == 2){

        Project.goals.push("Thiết kế web Responsive", "Hiển thị phần Thông tin cơ bản theo từng loại kích thước màn hình",
        "Hien thi thong tin danh sach cac thu cung","Chức năng thêm, xoá, sửa","Đưa trang Web lên online");
        Project.teams.push("Name: Vu Minh Quang","Name: Vu Nhat Hung");
        Project.scopes.push("scopes1", "scopes2");
        Project.primarys.push("Hiển thị phần Thông tin cơ bản theo từng loại kích thước màn hình", "Chức năng thêm, xoá, sửa");
        Project.timelines.push("24/10 : Khoi chay du an", 
        "24/10 - 30/11 : Hoan tat hien thi cac thong tin co ban" , 
        "30/11 - 06/11 : Hoan thien hien thi man hinh theo tung kich thuoc" , 
        "06/11 - 12/11 : Hien thi thong tin danh sach cac thu cung" , 
        "12/11 - 25/11 : Chức năng thêm, xoá, sửa " , 
        "25/11 - 30/11 : Đưa trang Web lên online ");

    } else {

        Project.goals.push("Thiết kế web Responsive", "Hiển thị phần Thông tin cơ bản theo từng loại kích thước màn hình",
        "Hien thi thong tin danh sach cac tin tuc","Chức năng thêm, xoá, sửa tin tuc","Đưa trang Web lên online");
        Project.teams.push("Name: Vu Minh Quang","Name: Vu Nhat Hung","Name: Vu Nhat Hieu");
        Project.scopes.push("scopes1", "scopes2");
        Project.primarys.push("Hiển thị phần Thông tin cơ bản theo từng loại kích thước màn hình", "Chức năng thêm, xoá, sửa tin tuc");
        Project.timelines.push("24/10 : Khoi chay du an", 
        "24/10 - 30/11 : Hoan tat hien thi cac thong tin co ban" , 
        "30/11 - 06/11 : Hoan thien hien thi man hinh theo tung kich thuoc" , 
        "06/11 - 12/11 : Hien thi thong tin danh sach cac tin tuc" , 
        "12/11 - 25/11 : Chức năng thêm, xoá, sửa tin tuc" , 
        "25/11 - 30/11 : Đưa trang Web lên online ");

    };
    
    return Project;   
}