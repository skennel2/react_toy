import React from 'react';

// 최상단 컴포넌트
class App extends React.Component {
  constructor(){
    super(...arguments);

    this.state={
      loginUser : {
        id : "skennel2",
        name  : "nayunsu",
        img : "http://imb.ulximg.com/image/src/artist/1392853723_dd7bf404602d4647b315404d9a76a123.jpg/5d4c5b81f923adce94da5a6b9f938bed/1392853723_frank_ocean_86.jpg",
        intro : "안녕하세요. skennel2의 땡스타그램입니다 ^_^",
        tag : ["개발자", "HIPHOP", "비바체"]
      },
      conf : {
        selectedId : "",
        isLoading  : false
      },
      data : [
        {
          PostId: 213,
          Image: "https://www.api2cart.com/wp-content/uploads/2015/04/rest-api.png",
          Subject: "REST API 제대로 알고 사용하기",
          Contents: " 어느 날 뜬금없이 대학교 친구에게 전화가 왔습니다. 그러더니 '야, REST API가 정확히 뭐 어떤 거야? 하는 질문에 가슴에 비수가 날아와 꽂힌 듯한 ...",
          Writer: "rest",
          Like: false,
          LikeCount: 12,
          CommentShow: false,
          Tag : ["RESTAPI"]
        },
        {
          PostId: 3,
          Image: "https://qph.ec.quoracdn.net/main-qimg-dd0ae408fb5f30aacc0dda3f72232580?convert_to_webp=true",
          Subject: "Node.js",
          Contents: " Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적입니다",
          Writer: "skennel2",
          Like: true,
          LikeCount: 56653,
          CommentShow: false,
          Tag : ["Node.js", "개발자", "자바스크립트"]
        },

        {
          PostId: 4,
          Image: "http://www.ilovepc.co.kr/news/photo/201610/14378_15645_2046.jpg",
          Subject: "MS, 창작자를 위한 PC '서피스 스튜디오' 공개",
          Contents: "5일 전 - 마이크로소프트가 10월26일(현지시각) 뉴욕에서 진행된 신제품 공개 행사에서 올인원PC '서피스 스튜디오'를 포함해 윈도우10 기기를 대상으로 한 ...",
          Writer: "skennel2",
          Like: false,
          LikeCount: 325,
          CommentShow: false,
          Tag : ["마이크로소프트", "서피스"]
        },
        {
          PostId: 743,
          Image: "https://designmodo.com/wp-content/uploads/2016/03/bootstrap-4-coming.png",
          Subject: "Bootstrap 4 에서 달라진 점들",
          Contents: "LESS 에서 SASS로 이동. 부트스트랩 4에서 가장 큰 변화는 LESS에서 SASS로의 이동입니다. Libsass 엔진을 통해서 더 빠른 컴파일을 기대하고 있습니다. transitions과 gradients 등의 모든 변수들의 옵션을 하나의 파일로 모으고 Sass 변수로 커스텀 할 수 있습니다.",
          Writer: "twitter",
          Like: false,
          LikeCount: 876542,
          CommentShow: false,
          Tag : ["Bootstrap"]
        },
        {
          PostId: 2,
          Image: "https://thenewboston.com/photos/users/90212/original/f02c41bde5c18421db2bbbe18967dc06.png",
          Subject: "AngularJS를 소개합니다",
          Contents: "아래의 그림은 구글트렌드에서 실시한 여러가지 웹 프레임워크의 트렌드화를 나타내고 있는 그림으로 2013년 이후 AngularJS의 압도적인 상승세 ...",
          Writer: "skennel2",
          Like: true,
          LikeCount: 876542,
          CommentShow: false,
          Tag : ["AngularJS", "개발자"]
        },
        {
          PostId: 2213,
          Image: "http://cdn.singersroom.com/wp-content/uploads/2016/01/frankocean04282011.jpg",
          Subject: "Hi",
          Contents: "Christopher Francis Frank Ocean is an American singer, songwriter, and rapper. Known for his idiosyncratic musical style",
          Writer: "larmar88",
          Like: true,
          LikeCount: 3443,
          CommentShow: false,
          Tag : []
        },
        {
          PostId: 2222,
          Image: "https://i.ytimg.com/vi/zmY8mG4_3j4/maxresdefault.jpg",
          Subject: "The Internet - Girl ft. KAYTRANADA",
          Contents: "I'm the girl who spoke to and hugged you Syd in Shibuya...I'm totally in love with all you since I listened to your song at FRF!!!We hope you come to Japan again",
          Writer: "larmar88",
          Like: false,
          LikeCount: 22322,
          CommentShow: false,
          Tag : ["The Internet"]
        },
        {
          PostId: 4315,
          Image: "http://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/bit_stacked_resized/public/images/2014/11/25/rae-sremmurd.jpg?itok=G1VmlVuN",
          Subject: "Listen for free on Spotify",
          Contents: "California-born, Tupelo-raised, Atlanta-based rap duo Rae Sremmurd debuted on Mike WiLL Made",
          Writer: "larmar88",
          Like: false,
          LikeCount: 12,
          CommentShow: false,
          Tag : ["RaeSremmurd"]
        },
        {
          PostId: 1212,
          Image: "http://www.xxlmag.com/files/2015/09/TyDolla1.jpg?w=600&h=0&zc=1&s=0&a=t&q=89",
          Subject: "Ty Dolla Sign and Rae Sremmurd Smoke,",
          Contents: "Ty Dolla Sign and Rae Sremmurd Smoke, Drink and Mosh in “Blase” Video - XXL",
          Writer: "larmar88",
          Like: false,
          LikeCount: 23423542,
          CommentShow: false,
          Tag : []
        },
        {
          PostId: 212,
          Image: "http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_progressive,pg_1,q_auto/partynextdoor-selfie_hpogrv.jpg",
          Subject: "PARTYNEXTDOOR",
          Contents: "PARTYNEXTDOOR Joins Forces With Quavo ",
          Writer: "larmar88",
          Like: false,
          LikeCount: 201233434,
          CommentShow: false,
          Tag : ["PBRNB", "GOOD VIBE"]
        }
      ]
    };
  }

  _getComments(){
    console.log('_getComments');
    return [
      {
        id : "Jodeci",
        comment : "코멘트 테스트입니당"
      },
      {
        id : "NERD",
        comment : "안녕하세요"
      }
    ]
  }
  _toggleCommentIsShow(postId){

    let dataCopy = this.state.data;
    let isDataChanged = false;

    dataCopy = dataCopy.map(
      (p)=>{
      if(p.PostId === postId){
        p.CommentShow = p.CommentShow === true ? false : true;
        isDataChanged = true;
      }
      return p;
    });

    if(isDataChanged)
    {
      console.log("데이터가 변경되었다.");
      console.log(dataCopy);
      this.setState({ data : dataCopy });
    }
  }

  _userIdClick(userId){
    this.setState({ conf : { selectedId : userId } });
    console.log(this.state.conf)
  }

  _tagClick(tagName){
    alert(tagName);
  }

  _likeClick(like){
    alert(like);
  }

  _goBuddyPage(userId){
    let dataCopy = this.state.data;
    console.log("dataCopy");
    console.log(dataCopy);
    dataCopy = dataCopy.filter(
      (p)=> {
      if(p.Writer === userId){
        return true;
      }
      return false;
    });
    console.log("dataCopy");
    console.log(dataCopy);
    window.scrollTo(0, 0);
    this.setState({ data : dataCopy });

  }

  _addPost(post){
    let dataCopy = this.state.data;
    let postWillAdd = {
      PostId: 111,
      Image: post.image,
      Subject: post.subject,
      Contents: post.contents,
      Writer: this.state.loginUser.id,
      Like: false,
      LikeCount: 0,
      CommentShow: false,
      Tag : post.hashtag
    };
    dataCopy.unshift(postWillAdd);
    window.scrollTo(0, 0);
    this.setState({ data : dataCopy });

  }

  render(){
    return (
      <div className="container">
        <DStaNavbar brandName='땡스타그램'>
          <DStaNavbarMenuItem
            icon="glyphicon glyphicon-align-justify"
            active={true}
            link='#'
            menuName='TIMELINE'/>
          <DStaNavbarMenuItem
            icon="glyphicon glyphicon-heart"
            active=''
            link='#'
            menuName='BUDDY'/>
          <DStaNavbarMenuItem
            icon="glyphicon glyphicon-search"
            active=''
            link='#'
            menuName='SEARCH'/>
            <DStaNavbarMenuItem
              icon="glyphicon glyphicon-pencil"
              active=''
              link='#'
              menuName='WRITE'/>
        </DStaNavbar>
        <br/>
        <DStaMain>
          <DstaMainWelcome User={this.state.loginUser}>
            <DStaHashTag source={this.state.loginUser.tag} tagClick={this._tagClick.bind(this)}/>
          </DstaMainWelcome>
          <DstaPostWriteForm addPost={this._addPost.bind(this)}/>
          <DStaMainTimelineContiner>
            {this.state.data.map((d, i)=>{
              return(
              <DStaMainPost key= {d.postid} image = {d.Image}>
                <PostSubject subject= {d.Subject} writer={d.Writer} userIdClick = {this._userIdClick.bind(this)} modalId = {"friendModal"}/>
                <DStaHashTag source = {d.Tag} tagClick={this._tagClick.bind(this)}/>
                <hr/>
                <PostContents contents = {d.Contents}/>
                <LikeContainer like       = {d.Like}
                               likeCount  = {d.LikeCount}
                               loginUser  = {this.state.loginUser}
                               postWriter = {d.Writer}
                               likeClick  = {this._likeClick.bind(this)}/>
                <br/>
                <DStaPostCommment postId      = {d.PostId}
                                  source      = {this._getComments()}
                                  isShow      = {d.CommentShow}
                                  moreClick   = {this._toggleCommentIsShow.bind(this)}
                                  modalId     = {"friendModal"}
                                  userIdClick = {this._userIdClick.bind(this)}/>
              </DStaMainPost>
              )
            })}
          </DStaMainTimelineContiner>
        </DStaMain>

        <ModalContainer id          = "friendModal"
                        senderId    = {this.state.loginUser.id}
                        selectId    = {this.state.conf.selectedId}
                        header      = "친구요청"
                        goBuddyPage = {this._goBuddyPage.bind(this)}/>
      </div>
    );
  }
}

class DstaPostWriteForm extends React.Component{
  constructor(){
    super(...arguments);
    this.state={
      userId   : "",
      image    : "",
      subject  : "",
      hashtag  : [],
      contents : ""
    }
  }

  _onKeyDown(e, val){
    console.log(val);
    if(val.length !== 0 && (e.keyCode == 32 || e.keyCode == 13)){

      let dataCopy = this.state.hashtag;
      dataCopy.push(val.trim())

      this.setState({hashtag : dataCopy});
      return true;
    }
    return false;
  }

  _onBlur(e, val){
    if(val.length != 0){

      let dataCopy = this.state.hashtag;
      dataCopy.push(val)

      this.setState({hashtag : dataCopy});
    }
  }

  _tagClick(tag, val){
    let dataCopy = this.state.hashtag;
    let idx = dataCopy.indexOf(tag);

    dataCopy.splice(idx, 1);
    console.log(tag)
    console.log(dataCopy)

    this.setState({hashtag : dataCopy});
  }

  _imageOnBlur(image){
    this.setState({image : image});
  }

  _contentsOnBlur(contents){
    this.setState({contents : contents});
  }

  _subjectOnBlur(subject){
    this.setState({subject : subject});

  }

  _addPost(){
    this.props.addPost(this.state);
    this.setState(
      {
        userId   : "",
        image    : "",
        subject  : "",
        hashtag  : [],
        contents : []
      }
    )
  }

  _allClear(){

  }

  render(){
    return(
      <div className="col-md-8">
        <div className="thumbnail">
          <img src={this.state.image} className="img-responsive" width="100%"></img>
          <div className="caption">
            <div className="form-horizontal">
              <TextForm label = "제목"
                        rows  = {1}
                        placeholder = "제목"
                        onBlur      = {this._subjectOnBlur.bind(this)}/>

              <HashTagWriteForm tagClick  = {this._tagClick.bind(this)}
                                onBlur    = {this._onBlur.bind(this)}
                                onKeyDown = {this._onKeyDown.bind(this)}
                                tagList   = {this.state.hashtag}/>
              <TextForm label = "이미지Url"
                        rows  = {1}
                        placeholder = "이미지Url"
                        onBlur      = {this._imageOnBlur.bind(this)}/>
              <TextForm label = "내용"
                        rows  = {4}
                        placeholder = "내용"
                        onBlur      = {this._contentsOnBlur.bind(this)}/>
              <div className = "text-center">
                <button className = "btn btn-default" onClick={this._addPost.bind(this)}>등록</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TextForm extends React.Component{
  constructor(){
    super(...arguments);
  }

 _onBlur(e){
   this.props.onBlur(this.refs.ta.value);
 }

  render(){
    return(
      <div className="form-group">
        <label className="control-label col-sm-2">{this.props.label}</label>
        <div className="col-sm-10">
          <textarea
                 ref         = "ta"
                 className   = "form-control"
                 id          = "hashform"
                 placeholder = {this.props.placeholder}
                 rows        = {this.props.rows}
                 onBlur      = {this._onBlur.bind(this)}/>
        </div>
      </div>
    )
  }
}

class HashTagWriteForm extends React.Component{
  constructor(){
    super(...arguments)
  }

 _onKeyDown(e){
   let isClear = this.props.onKeyDown(e, this.refs.tagInput.value);
   if(isClear){
     this.refs.tagInput.value = "";
   }
 }

 _onBlur(e){
   this.props.onBlur(e, this.refs.tagInput.value);
   this.refs.tagInput.value = "";
 }

 _tagClick(tag){
   this.props.tagClick(tag, this.refs.tagInput.value);
 }

  render(){
    return(
      <div className="form-group">
        <label className="control-label col-sm-2">해시태그</label>
        <div className="col-sm-10">
          <input ref         = "tagInput"
                 type        = "text"
                 className   = "form-control"
                 id          = "hashform"
                 placeholder = "해시태그를 입력하세요"
                 onKeyDown   = {this._onKeyDown.bind(this)}
                 onBlur      = {this._onBlur.bind(this)}
                 value       = {this.props.hashtagInput}/>
          <DStaHashTagAdd source   = {this.props.tagList}
                          tagClick = {this._tagClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

class NaviTopButton extends React.Component{
  constructor(){
    super(...arguments);
  }

  render(){
    return(
      <div>

      </div>
    );
  }
}

class ModalContainer extends React.Component{
  constructor(){
    super(...arguments);
  }

  _getUserImage(userId){
    return "http://pixel.nymag.com/imgs/daily/vulture/2016/06/21/21-frank-ocean.w529.h529.jpg";
  }

  _IsMyBuddy(me, userId){
    return true;
  }

  _goBuddyPage(userId){
    this.props.goBuddyPage(userId);
  }

  render(){
    let body;
    if(this.props.selectId === this.props.senderId){
      body =(<div></div>);
    }
    else{
      body=(
              <div className="list-group">
                <a href="#" className="list-group-item" onClick={this._goBuddyPage.bind(this, this.props.selectId)} data-dismiss="modal">
                  <span className="glyphicon glyphicon-user"> </span> <span> </span>
                  <span className="text-primary">{this.props.selectId}</span>님의 페이지로
                </a>

                <a href="#"
                   className={this._IsMyBuddy(this.props.senderId, this.props.selectId) ? "list-group-item disabled" : "list-group-item"}>
                  <span className="	glyphicon glyphicon-heart"> </span> <span> </span>
                  친구요청
                </a>
              </div>
           );
    }
    return(
      <div id={this.props.id} className="modal fade" role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <div className="thumbnail">
                <CircleImage img={this._getUserImage(this.props.selectId)} size="150px"/>
                <div className="text-center text-primary">{this.props.selectId}</div>
              </div>

            </div>
            {body}
          </div>
        </div>
      </div>
    );
  }
}

// 코멘트 컴포넌트
class DStaPostCommment extends React.Component{
  constructor(){
    super(...arguments);
  }

  _moreClick(){
    this.props.moreClick(this.props.postId);
  }

  _userIdClick(userId){
    this.props.userIdClick(userId);
  }

  render(){
    let comment;
    if(this.props.isShow === true){
      comment =
      (
        <div>
          <span className="glyphicon glyphicon-list-alt"></span> Comment
          <table className="table table-condensed">
              <tbody>

                {this.props.source.map((c, i)=>{
                  return(
                    <tr className="default" key = {i}>
                      <td width="15%">
                         <a onClick={this._userIdClick.bind(this, c.id)} data-toggle="modal" data-target={"#" + this.props.modalId}>
                           {c.id}
                         </a>
                      </td>
                      <td width="85%"> {c.comment}</td>
                    </tr>
                  )
                })}

              </tbody>
          </table>
          <div onClick={this._moreClick.bind(this)}>
            <span className="glyphicon glyphicon-chevron-up"></span>
          </div>
        </div>
      );
    }
    else{
      comment =
      (
          <div onClick={this._moreClick.bind(this)}>
            <span className="glyphicon glyphicon-chevron-down"></span>
            <span className="text-primary">
              more...
            </span>
          </div>
      );
    }

    return(
      <div>
        {comment}
      </div>
    );
  }
}

class PostContents extends React.Component{
  constructor(){
    super(...arguments);
  }

  render(){
    return(
      <p>{this.props.contents}</p>
    );
  }
}

class PostSubject extends React.Component{
  constructor(){
    super(...arguments);
  }

  _userIdClick(userId){
    this.props.userIdClick(userId);
  }

  render(){
    return(
      <h3>{this.props.subject} By <span> </span>
        <a onClick={this._userIdClick.bind(this, this.props.writer)}
           data-toggle="modal"
           data-target={"#" + this.props.modalId}>{this.props.writer}
        </a>
      </h3>
    );
  }
}

class DStaMainPost extends React.Component{
  constructor(){
    super(...arguments);
  }

  render(){
    return(
        <div className="col-md-8">
          <div className="thumbnail">
            <img src={this.props.image} className="img-responsive" width="100%"/>
            <div className="caption">
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}

class LikeContainer extends React.Component{
  constructor(){
    super(...arguments);
  }

  _likeClick(){
    this.props.likeClick();
  }

  render(){
    let likeDom;

    if(this.props.like){
      likeDom = (
        <div>
          <span className="text-info">당신은 이 글을 좋아합니다 ^_^</span> <span>   </span>
          <span>
            <small className="label label-default">{this.props.likeCount} People Like This</small>
          </span>
        </div>
      );
    }
    else{
      likeDom =(
        <div>
          <a onClick={this._likeClick.bind(this)}><span className="glyphicon glyphicon-thumbs-up"></span> 좋아요</a> <span>   </span>
          <span>
            <small className="label label-default">{this.props.likeCount} People Like This</small>
          </span>
        </div>
      );
    }

    if(this.props.loginUser.id === this.props.postWriter)
    {
      likeDom =(
        <div>
          <span>
            <small className="label label-default">{this.props.likeCount} People Like This</small>
          </span>
        </div>
      );
    }

    return(
      <div>
        {likeDom}
      </div>
    );
  }
}

class DStaMainTimelineContiner extends React.Component{
  constructor(){
    super(...arguments);
  }

  render(){
    return(
      <div className="row" id="timeline">
        {this.props.children}
      </div>
    )
  }
}

class DstaMainWelcome extends React.Component{
  constructor(){
    super(...arguments);
  }

  render(){
    return(
      <div className="page-header">
        <div className="row">
          <div className="col-md-1 col-sm-5 col-xs-5">
            <CircleImage img={this.props.User.img} size="80px"/>
          </div>
          <div className= "col-md-11 col-sm-7 col-xs-7">
            <div className="row">
              <h1 className="text-left"> <span className="text-primary">{this.props.User.id}</span>  <small>님의 타임라인</small></h1>
              <div className="text-left text-warning">
                {this.props.User.intro}
              </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


class CircleImage extends React.Component{
  constructor(){
    super(...arguments);
  }
  render(){
    return(
      <img className="img-responsive img-circle" src={this.props.img} width={this.props.size} height={this.props.size}/>
    )
  }
}

//땡스타 컨텐츠 컨테이너
class DStaMain extends React.Component{
  constructor(){
    super(...arguments);
  }

  render(){
    return(
      <div className="container" id="mainContainer">
        {this.props.children}
      </div>
    )
  }
}

class DstaFriendContainer extends React.Component{
  constructor(){
    super(...arguments);
  }

  render(){
    return(
      <div>

      </div>
    );
  }
}

// 해시태그
class DStaHashTag extends React.Component{
  constructor(){
    super(...arguments);
  }

 _tagClick(tag){
   this.props.tagClick(tag);
 }

 _tagDelete(tag){
   this.props.tagDelete(tag);
 }

  render(){
    console.log(this.props.source)
    return(
      <div>
        {this.props.source.map((h, i)=>{
          return(<span onClick={this._tagClick.bind(this, h)} key={i}><span className="label label-warning">#{h}</span> <span> </span></span>)
        })}
      </div>
    )
  }
}

// 해시태그
class DStaHashTagAdd extends React.Component{
  constructor(){
    super(...arguments);
  }

 _tagClick(tag){
   this.props.tagClick(tag);
 }

  render(){
    console.log(this.props.source)
    return(
      <div>
        {this.props.source.map((h, i)=>{
          return(<span onClick={this._tagClick.bind(this, h)} key={i}><span className="label label-warning">#{h}</span> <span> </span></span>)
        })}
      </div>
    )
  }
}

// 땡스타 네비게이션바
class DStaNavbar extends React.Component{
  constructor(){
    super(...arguments)
  }
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              {this.props.brandName}
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
            {this.props.children}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

//네비게이션 메뉴 아이템
class DStaNavbarMenuItem extends React.Component{
  constructor(){
    super(...arguments);
  }

  render(){
    console.log(this.props.active);
    return(
      <li className={this.props.active ? "active" : ""}>
        <a href={this.props.link}>
          <span className={this.props.icon}></span>
          <span> </span>
          {this.props.menuName}
        </a>
      </li>
    );
  }
}

export default App;
