const db = require('./db');

module.exports = {
	search: function(user, callback){
		var sql = "select * from user where Name = '"+user.name+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where username = '"+user.username+"' and password = '"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});
	},
	getAll: function(callback){

		var sql = "select * from user where usertype = '"+'user'+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllJob: function(callback){

		var sql = "select * from company";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into user (Name, Company_name, number, username, password) values('"+user.name+"','"+user.companyname+"', '"+user.number+"', '"+user.username+"', '"+user.password+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insertjob: function(job, callback){
		var sql = "insert into company (Com_Name, job_title, job_location, salary) values('"+job.name+"','"+job.jobname+"', '"+job.joblocation+"', '"+job.salary+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updateJob: function(job, callback){
		console.log(job);
		var sql = "update company set Com_Name = '"+job.comname+"', job_title = '"+job.jobtitle+"', job_location = '"+job.joblocation+"', salary = '"+job.salary+"' where com_id = '"+job.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		console.log(user);
		var sql = "update user set Name = '"+user.name+"', Company_name = '"+user.companyname+"', number = '"+user.number+"', username = '"+user.username+"', password = '"+user.password+"' where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from user where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	deletejob: function(job, callback){
		var sql = "delete from company where com_id = '"+job.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}

