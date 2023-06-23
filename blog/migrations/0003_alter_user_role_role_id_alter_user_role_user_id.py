# Generated by Django 4.2 on 2023-06-23 00:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_alter_user_role_user_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user_role",
            name="role_id",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE, to="blog.role"
            ),
        ),
        migrations.AlterField(
            model_name="user_role",
            name="user_id",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                primary_key=True,
                serialize=False,
                to="blog.user",
            ),
        ),
    ]
