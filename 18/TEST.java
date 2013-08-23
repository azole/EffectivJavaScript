public class TEST {		// 類別 class
	
  	public static void main(String[] args){
  		
  		TEST t = new TEST("Cyril");	// 呼叫建構式建立物件 object 

  		System.out.println(t.getName());	// 呼叫物件的方法
  	}

  	private String _name;

  	// 建構式 constructor
    public TEST(){}
  	public TEST(String name){	
  		this._name = name;
  	}

  	// 公有方法 methods，函式(function or procedure)的一種
  	public String getName(){	
  		return this.getHello() + this._name;	
  	}

  	// 方私有法 methods，函式(function or procedure)的一種
  	private String getHello(){	
  		return "Hi, ";

  	}
}