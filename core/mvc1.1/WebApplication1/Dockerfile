FROM microsoft/aspnetcore-build:1.1.1 as buildenv

WORKDIR /app
ARG Configuration=Release

COPY ./WebApplication1.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c $Configuration -o /out


FROM microsoft/aspnetcore:1.1.1

WORKDIR /app
COPY --from=buildenv /out .

ENTRYPOINT ["dotnet", "WebApplication1.dll"]