#FROM microsoft/aspnetcore:1.1
#ARG source
#WORKDIR /app
#EXPOSE 80
#COPY ${source:-obj/Docker/publish} .
#ENTRYPOINT ["dotnet", "ToolsIntegration.dll"]

FROM microsoft/aspnetcore-build:1.1.1 as buildenv

ARG configuration=Release
#ARG source
WORKDIR /app

COPY ./*.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c $configuration -o /out


FROM microsoft/aspnetcore:1.1.1

WORKDIR /app
COPY --from=buildenv /out .

ENTRYPOINT ["dotnet", "ToolsIntegration.dll"]
